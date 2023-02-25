import './App.css'
import 'antd/dist/reset.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import SubgraphTracker from 'pages/SubgraphTracker'

export default function App() {
  useEffect(() => {
    document.body.dataset.theme = 'light'
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubgraphTracker />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
