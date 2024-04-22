import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage, LoginDashboard, HomeDashboard } from "../pages"
 export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/loginDashboard" element={ <LoginDashboard/>} />
        <Route path="/homedashboard" element={<HomeDashboard/>} /> 
        </Routes>
      </BrowserRouter>
    )
  }