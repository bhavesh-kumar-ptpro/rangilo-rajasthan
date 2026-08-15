import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import LoadingScreen from '../components/common/LoadingScreen'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import Feedback from '../pages/Feedback'
import NotFound from '../pages/NotFound'
import WhyChooseUs from '../pages/WhyChooseUs'
import AdminDashboard from '../pages/admin/AdminDashboard'
import AdminLogin from '../pages/admin/AdminLogin'
import { isAdminAuthenticated } from '../utils/adminAuth'

function ProtectedAdmin(){return isAdminAuthenticated()?<AdminDashboard/>:<Navigate to="/admin/login" replace/>}

export default function AppRoutes({ home }) {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const previousPath = useRef(null)

  useEffect(() => {
    const movingWithinAdmin = previousPath.current?.startsWith('/admin') && location.pathname.startsWith('/admin')
    previousPath.current = location.pathname
    if (movingWithinAdmin) {
      setLoading(false)
      document.body.style.overflow = ''
      return
    }
    setLoading(true)
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = ''
    }, 550)
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [location.pathname])

  return <>
    <AnimatePresence>{loading && <LoadingScreen key={location.pathname} />}</AnimatePresence>
    <Routes location={location}>
      <Route path="/" element={home} />
      <Route path="/why-choose-us" element={<WhyChooseUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/login" element={isAdminAuthenticated()?<Navigate to="/admin" replace/>:<AdminLogin/>} />
      <Route path="/admin/*" element={<ProtectedAdmin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
}
