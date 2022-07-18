import { useEffect, useState } from 'react'
import { themes } from 'theme'
import { colorsNumeric } from 'utils/colors'

const set = (property, value) => {
  document.documentElement.style.setProperty(`--${property}`, value)
}

const cssProperties = (themeObj, prevKey = '') => {
  for (const [property, value] of Object.entries(themeObj)) {
    let key = [prevKey, property].filter(Boolean).join('-')
    if (typeof value === 'object') {
      cssProperties(value, key)
    } else {
      key = property === 'main' ? prevKey : key
      set(key, colorsNumeric(value))
    }
  }
}

export const useTheme = () => {
  const themeKey = window.localStorage.getItem('theme') || 'dark'
  const [theme, setTheme] = useState(themeKey)

  useEffect(() => {
    const themeObj = themes[theme]
    cssProperties(themeObj)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    const themeObj = themes[newTheme]
    window.localStorage.setItem('theme', newTheme)
    cssProperties(themeObj)
  }
  return { theme, toggleTheme}
}
