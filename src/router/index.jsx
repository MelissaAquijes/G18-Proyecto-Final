import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage, LoginDashboard, HomeDashboard, ProductsDashboard, ComentsDashboard, OrdersDashboard, SalesDashboard } from "../pages"
 export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/loginDashboard" element={ <LoginDashboard/>} />
        <Route path="/homedashboard" element={<HomeDashboard/>} /> 
        <Route path="/productsDashboard" element={<ProductsDashboard/>}/>
        <Route path="/comentsDashboard" element={<ComentsDashboard/>}/>
        <Route path="/OrdersDashboard" element={<OrdersDashboard/>}/>
        <Route path="/SalesDashboard" element={<SalesDashboard/>}/>
        
        </Routes>
      </BrowserRouter>
    )
  }