import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Projects from './components/projects/AllProjects'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Conity from './components/projects/Conity'
import Exchange from './components/projects/Exchange'
import DeepLogic from './components/projects/DeepLogic'
import LiveExtension from './components/projects/LiveExtension'
import Maskott from './components/projects/Maskott'
import StreamManager from './components/projects/StreamManager'
import TalentReferral from './pages/TalentReferral'

import './App.css'
import { AppProvider } from './AppContext'
import PageTransition from './PageTransition'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Mentoring from './pages/Mentoring'
import Testimonials from './pages/Testimonials'
import TechStack from './pages/TechStack'

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
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="conity" element={<Conity />} />
          <Route path="exchange" element={<Exchange />} />
          <Route path="deep-logic" element={<DeepLogic />} />
          <Route path="live-extension" element={<LiveExtension />} />
          <Route path="maskott" element={<Maskott />} />
          <Route path="stream-manager" element={<StreamManager />} />
          <Route path="talents" element={<TalentReferral />} />
          <Route path="mentoring" element={<Mentoring />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="tech-stack" element={<TechStack />} />
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
