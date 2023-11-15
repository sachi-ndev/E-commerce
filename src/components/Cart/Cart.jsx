import React, { useContext} from 'react'
import { ProductContext } from '../Context/Context';
import './cart.css'
import { Link, useNavigate } from 'react-router-dom';
import Counter from './Counter';
import { Trash } from '@phosphor-icons/react';

export default function Cart() {

  const navigate = useNavigate()

  const{cart,setCart,price}=useContext(ProductContext)
  // const{,setSubtotal}=useContext(ProductContext)
  // console.log(cart);
  // console.log(price);
  const cost=cart.map((e)=>{
    return e.price
  })
  console.log('price',cost)

  const totalPrice = cost.reduce((total , m )=>{
  return total = total + m
    },0 )

    const deleteItem = (item)=>{
      // console.log('......');
      // cart.map((e)=>{
      //   console.log(e);
      // })
      // console.log(item.title);
    const updatedCart = [...cart];
    // console.log("update",updatedCart);
    updatedCart.splice(item, 1);
    setCart(updatedCart);
     

    }
    
// console.log(totalPrice);


let shippingcharge= 0
if (cost.length===0) {
  shippingcharge=0
}
else{
  shippingcharge=(cost.length-1)+4.99
}
const total=Number(totalPrice+shippingcharge.toFixed(2))
console.log(total);
console.log(total.toFixed(2));

  return (
   <> 
    <div className="h-[100vh] bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3 h-[80vh] overflow-y-scroll  " id='ovrflow'>
          {/* Cart Item 1 */}
          {
            cart.length==0 ?(

              <>
              <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start ">
              <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">No Products In Your Cart</h2>
                  <Link to='/shop'>
                  <p className="mt-1 text-xs text-gray-700">Find Products</p>
                  </Link>
                </div>

              </div>
              </>
            ) :
            <div>          {
              cart.map((e,index)=>(
                <div key={index}>
            <div  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
               onClick={()=>navigate(`/${e.id}`,{state:{id:e.id}})}
                src={e.images[0]}
                className="h-[5rem] aspect-video rounded-xl sm:w-40 "
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">{e.title}</h2>
                  <p  className="mt-1 text-xs text-gray-700">{e.category}</p>
     
                  <Counter id={index} amount={e.price}/>
                  {/* <h1>{subtotal}</h1> */}

                </div>
                <div  className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  {/* <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                    <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={} min="1" />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover-bg-blue-500 hover-text-blue-50"> + </span>
                  </div> */}
                  <div className="flex flex-col gap-7 items-center space-x-4">
                    <p className="text-[1.1rem] font-bold text-[#4a59a7] ">{e.price} $</p>

                    <Trash onClick={()=>deleteItem(e)}/>
                  </div>
                </div>
              </div>
            </div>
            </div>
              ))
            }
            <Link to='/shop'>
            <p className="mt-1 text-xs text-gray-700">Find More Products</p>
            </Link>
            </div>
          }

        </div>

        {/* Subtotal */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$ {totalPrice}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$ {shippingcharge}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold">$ {total}</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover-bg-blue-600">Check out</button>
        </div>
      </div>
    </div>
   </>
  );
}

