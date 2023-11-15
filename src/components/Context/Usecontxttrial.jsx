// import React, { useContext } from "react";
// import { ProductContext } from "./Context";

// export default function Usecontxttrial() {
//   const { myValue, setMyValue } = useContext(ProductContext);
//   const {products} = useContext(ProductContext)

//   console.log(myValue);
//   console.log(products)

//   return (
//     <div>
//       <p>{myValue}</p>
//       <button
//         class="flex select-none items-center gap-3 rounded-lg bg-red-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//         type="button"
//         data-ripple-light="true"
//         onClick={()=>setMyValue("Saheer mandan")}
//       >
//         click Here
//       </button>
//       {
//         products.map((e)=>(
//             <>
//             <p>{e.title}</p>
//             </>
//         ))
//       }
//     </div>
//   );
// }
