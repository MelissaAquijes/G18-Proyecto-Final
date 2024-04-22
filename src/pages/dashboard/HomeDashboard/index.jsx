export default function HomeDashboard() {
  return (
    <>
    <div class=" grid grid-cols-6 h-[100vh] "> 
      <div class=" col-span-1 ">
        <div class=" flex justify-center items-center ">
          <img class="h-6 "  src="src\assets\icons\book-outline.svg" alt=""/>
          <h1 class="font-bold text-black-00 text-[30px] ml-3">Wawita</h1>
        </div>
      <hr class="my-2 " />
        <div class="flex flex-col">
          <div class="p-2"><button class="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Dashboard</button></div>
          <div class="p-2"><button class="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Products</button></div>
          <div class="p-2"><button class="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Sales</button></div>
          <div class="p-2"><button class="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">coments</button></div>
        </div>
      <hr class="my-2 " />
        <div class="flex flex-col ml-0    ">
          <div class="p-2"><button class="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">pedidos</button></div>
          <div class="p-2"><button class="w-full py-2 hover:bg-gray-600 rounded-lg duration-300">Sales</button></div>
        </div>
      <hr class=" p-4" />
        <div class="flex my-20 justify-center hover:bg-gray-600 rounded-lg duration-300 p-3 mb-2">
          <img class="h-5" src="src\assets\icons\log-out-outline.svg" alt=""/>
          <button class=" px-6 ">LogOut</button>
        </div>
      </div>
    
      <div class="grid col-span-5 bg-green-400 ">content</div> 
    </div>
    </>
  )
}