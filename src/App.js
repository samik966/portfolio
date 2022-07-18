import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useTheme } from 'hooks/useTheme'
import { Layout } from 'components'
import { About, Experience, HireMe, Home, Projects, Skills } from 'pages'

function App () {
  useTheme()
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout key={location.pathname}>
        <Routes location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/hire-me' element={<HireMe />} />
        </Routes>
      </Layout>
    </AnimatePresence>
  )
}

export default App
