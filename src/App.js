import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layouts/Layout'
import Home from './components/Home/Home'
function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
      </Routes>
    </>
  )
}

export default App
