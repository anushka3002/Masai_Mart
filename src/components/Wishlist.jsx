import { useEffect, useState } from "react";

const Wishlist = ()=>{

    const [data,setData] = useState()

    useEffect(()=>{
        var newData2 = JSON.parse(localStorage.getItem('wishlistData') || "[]");
        console.log(newData2,"newData");
    },[])

    const click=(()=>{
        console.log("hello")
        var newData = JSON.parse(localStorage.getItem('wishlistData') || "[]");
        
        // if(wishlistJsonData==null){
        //   listData=[]
        // }
        // else{
        //   listData=wishlistJsonData;
        // }
        // setWishListData(e)
        // listData.push(wishListData)
        // localStorage.setItem('wishlistData',JSON.stringify(listData))
        setData(newData)
        console.log(newData,"newData");
      })
    console.log(data,"data")

    return(
        <>
        <p onClick={click}>Wish</p>
        </>
    )
}

export default Wishlist