import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/Context";

export default function Counter(props) {
    const [count,setCount]=useState (1)
    const sub=props.amount*count

    const plus=()=>{
        setCount(count + 1)
  
    }
    const minus=()=>{
        setCount(count - 1)
    }
    

  return (
    <div className="flex mt-2 w-[10rem] " >
      <div
        className="w-[15%]  bg-slate-500 grid place-items-center rounded-tl-md  rounded-bl-md text-white select-none"
        onClick={() => minus()}
      >
        -
      </div>
      <div className="w-[20%]  bg-slate-400/25 grid place-items-center">
        {count}
      </div>
      <div
        className="w-[15%]  bg-slate-500 grid place-items-center rounded-tr-md  rounded-br-md text-white select-none"
        onClick={() => plus()}
      >
        +
      </div>
      {sub}
    </div>
  );
}
