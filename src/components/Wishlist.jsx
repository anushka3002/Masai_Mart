import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Wishlist = ()=>{

    const [data,setData] = useState([])

    useEffect(()=>{
        var newData = JSON.parse(localStorage.getItem('wishlistData') || "[]");
        setData(newData)
    },[])

    return(
        <>
        <Navbar/>
        <div>
            <div className="items-center mx-auto">
                <p className="font-bold text-[30px] text-center text-[#57575c] items-center mx-auto">Wishlisted Items</p>
            </div>
            <div className="grid grid-cols-4 mx-auto items-center px-10 pt-10 gap-8">
        {!data? <div>0 Wishlisted Item</div> : data?.map((e, i) => {
            return (
              <div key={e.id}>
                  <div class="max-w-sm rounded shadow-lg border">
                  <img className="w-full" src={e.image} alt="Product"/>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{e.brand}</div>
                    <p class="text-gray-700 text-base">
                      {e.title}
                    </p>
                  </div>
                  <div class="px-6 pt-0 pb-2 flex justify-between">
                    <div>
                    <span class="inline-block rounded-full py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      ${e.price}.00
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {e.category}
                    </span>
                    </div>
                    <div>
                    <span class="inline-block rounded-full cursor-pointer px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQ0_GVIBpaMC8BCMb1I2JdpDQOs5pt9b51g&usqp=CAU" width="25px" height="25px"/>
                    </span>
                    </div>
                  </div>
                </div>
        </div>
            )})}
            </div>
            </div>
        </>
    )
}

export default Wishlist