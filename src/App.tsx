import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Conity from './pages/projectPages/Conity'
import DecentralizedExchange from './pages/projectPages/DecentralizedExchange'
import DeepLogic from './pages/projectPages/DeepLogic'
import LiveExtension from './pages/projectPages/LiveExtension'
import Maskott from './pages/projectPages/Maskott'
import StreamManager from './pages/projectPages/StreamManager'
import Umanis from './pages/projectPages/Umanis'

import './App.css'
import { AppProvider } from './AppContext'
import PageTransition from './PageTransition'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export default function App() {
  const location = useLocation()
  const [key, setKey] = useState<string | undefined>(location.key)

  useEffect(() => {
    setKey(location.key)
  }, [location.key])

  return (
    <AppProvider>
      <PageTransition in={true} timeout={300} key={key}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />}/>
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="conity" element={<Conity />} />
          <Route path="decentralized-exchange" element={<DecentralizedExchange />} />
          <Route path="deep-logic" element={<DeepLogic />} />
          <Route path="live-extension" element={<LiveExtension />} />
          <Route path="maskott" element={<Maskott />} />
          <Route path="stream-manager" element={<StreamManager />} />
          <Route path="umanis" element={<Umanis />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </PageTransition>
    </AppProvider>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}
