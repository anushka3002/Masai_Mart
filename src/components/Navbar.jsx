import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <>
        <div className="w-full h-[80px] text-[white] bg-[black]">
            <div className="w-[200px] flex justify-between align-left absolute right-10 mt-6">
            <Link to={"/products"}><p className="font-semibold">Products</p></Link>
            <Link to={"/wishlist"}><p className="font-semibold">Wishlist</p></Link>
            </div>   
        </div>
        </>
    )
}

export default Navbar;