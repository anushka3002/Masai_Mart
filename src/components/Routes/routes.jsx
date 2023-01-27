import {Routes,Route} from "react-router"
import Navbar from "../Navbar"
import Products from "../Products"
import Wishlist from "../Wishlist"

export const Router=()=>{
    return(
    <>
    <Routes>
        <Route exact path="/" element={<Navbar/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/wishlist" element={<Wishlist/>}/>
    </Routes>
    </>
    )
}
