import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MemoriaPage from '../Pages/Memoria/Index'
import HomePage from '../Pages/Home/Index'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/memoria" element={<MemoriaPage />}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter
