import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useTheme } from 'hooks/useTheme'
import { Layout, ThemeToggle } from 'components'
import { About, Contact, Error404, Experience, Home, Projects, Skills } from 'pages'

function App () {
  const { toggleTheme, theme } = useTheme()
  const location = useLocation()
  return (
    <Layout>
      <ThemeToggle active={theme === 'dark'} onClick={toggleTheme} />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}

export default App
