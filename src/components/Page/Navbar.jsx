// import React from 'react'
import { Link } from "react-router-dom";

import {
  List,
  MagnifyingGlass,
  ShoppingCart,
  UserCircle,
} from "@phosphor-icons/react";
import { useContext } from "react";
import { ProductContext } from "../Context/Context";
import Search from "./Search";

export default function Navbar() {

  const {cart,search,setSearch}=useContext(ProductContext)
  // console.log(cart.length);
  console.log(search);

  return (
    <div className="font-Quicksand">
      <div className="w-[100vw] h-[4rem] bg-white text-slate-900  flex justify-between items-center">
        <div className="flex text-[2rem] items-center p-5">
          <h1>LOGO</h1>
        </div>
        <div className="flex w-[38vw] gap-8 items-center select-none">
          <Link to="/">
            <h1 className="border-r-2 border-slate-400/50 py-1 px-4">Home</h1>
          </Link>
          <Link to="/shop">
            <h1 className="border-r-2 border-slate-400/50 py-1 px-4">Shop</h1>
          </Link>
          <Link to="/trial">
            <h1 className="border-r-2 border-slate-400/50 py-1 px-4">About</h1>
          </Link>
          <h1 className="border-r-2 border-slate-400/50 py-1 px-4">Contact</h1>
          <h1 className="py-2 ">Journal</h1>
        </div>
      </div>

      <div className="w-[100vw] h-[6rem] px-[4rem] bg-slate-200  flex justify-between items-center">
        <div>
          <List size={24} />
        </div>

        <div className="flex items-center bg-white rounded-md    ">
        <Search/>
        </div>

        <div className="w-[6rem] flex justify-between ">
          <UserCircle size={32} weight="duotone" />
          <Link to="/cart">

            <div className="flex  items-center justify-center">
              <div className="relative scale-[85%]">
              <ShoppingCart size={32} weight="duotone" />
                <span className="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
                  {cart.length}
                </span>
              </div>
            </div>

          </Link>
        </div>
      </div>
    </div>
  );
}
