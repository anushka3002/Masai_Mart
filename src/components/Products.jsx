import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter,setFilter] = useState("");
  const [wishListData, setWishListData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${filter}`
      )
      .then((res) => {
        setData(res.data.data);
      });
  }, []);

  // console.log(data.data)

  const handleClick=(x)=>{
    setFilter(x);
    console.log(filter)
    console.log(x);
  }

  const filterData= ["kids", "men", "women", "homedecor"]
  console.log(wishListData,"widh")

  var wishlistJsonData
  var listData=[]

  const handleWishlist=((e)=>{
    // wishlistJsonData=JSON.parse(localStorage.getItem('wishlistData') || "[]")
    // if(wishlistJsonData==null){
    //   listData=[]
    // }
    // else{
    //   listData=wishlistJsonData;
    // }
    setWishListData(e)
    listData.push(wishListData)
    localStorage.setItem('wishlistData',JSON.stringify(listData))
    // setMainData(listData)
  })

  return (
    <>
      {console.log(data, "data")}
      <div>
        <Navbar />
        <div className="border">
            <p>Products</p>
        </div>
        <div className="flex">
        <div className="border mt-10 w-[200px]">
                <p className="font-bold">Filter</p>
                <div className="text-semibold text-center">
                {filterData.map(x => <p onClick={()=>handleClick(x)} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{x}</p>)}</div>
            </div>
        <div className="grid grid-cols-3 mx-auto items-center px-10 pt-10 gap-8">
          {data.map((e, i) => {
            return (
              <div key={e.id}>
                <div onClick={()=>handleWishlist(e)} class="max-w-sm rounded shadow-lg border">
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
                    <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBhKAylRmoKm3M9zHkHnGqlWpTZuxsoVf4QVutNnt1aMQGgm8ul69pIlhncZ2lbG0cDk&usqp=CAU" width="25px" height="25px"/>
                    </span>
                    </div>
                  </div>
                </div>
                </div>
            );
          })}
        </div>
        </div>
      </div>
    </>
  );
};

export default Products;
