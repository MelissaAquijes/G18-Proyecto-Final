import { Link } from "react-router-dom"
import { SalesChartDashboard } from "../../../chartjs"
export default function SalesDashboard() {

  return (
    <>
    <div className=" grid grid-cols-6 h-[100vh] "> 
      <div className=" col-span-1 ">
        <div className=" flex justify-center items-center ">
          <img className="h-6 "  src="src\assets\icons\book-outline.svg" alt=""/>
          <h1 className="font-bold text-black-00 text-[30px] ml-3">Wawita</h1>
        </div>
      <hr className="my-2 " />
        <div className="flex flex-col">
          <div className="p-2">
            <button className="w-full py-2 hover:bg-gray-600 rounded-l-lg duration-300">
              <Link to={"/HomeDashboard"}>
                Dashboard
              </Link>
            </button>
            </div>
            <div className="p-2">
            <button className="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">
              <Link to={"/ProductsDashboard"}>
                Products
              </Link>
            </button>
          </div>
          <div className="p-2">
            <button className="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">
              <Link to={"/comentsDashboard"}>
                coments
              </Link>
            </button>
          </div>
        </div>
      <hr className="my-2 " />
        <div className="flex flex-col ml-0    ">
          <div className="p-2">
            <button className="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">
              <Link to={"/OrdersDashboard"}>
              Orders
              </Link>
            </button>
          </div>
          <div >
            <button className="w-full py-2 bg-gray-600 rounded-l-lg duration-300"> 
              <Link to={"/SalesDashboard"}>
              Sales
              </Link>
            </button>
          </div>
        </div>
      <hr className=" p-4" />
        <div className="flex my-20 justify-center hover:bg-gray-600 rounded-lg duration-300 p-3 mb-2">
          <img className="h-5" src="src\assets\icons\log-out-outline.svg" alt=""/>
          <button className=" px-6 ">LogOut</button>
        </div>
      </div>
    
      <div className="grid col-span-5 bg-green-400 p-4 ">Orders Dashboard
      <SalesChartDashboard/>
      </div> 
    </div>
    </>
  )
}