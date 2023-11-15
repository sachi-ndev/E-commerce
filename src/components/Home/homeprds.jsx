import React, { useContext, useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import { ArrowFatLineRight, Heart, ShareFat, ShoppingCart } from '@phosphor-icons/react';

import  './../style/home.css'
import { ProductContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';

export default function Homeprds() {

  const{products,cart,setCart,price,setPrice}=useContext(ProductContext)

  const navigate=useNavigate()

  const addtocart=(e)=>{
    setCart([...cart,e])
    setPrice([...price,e.price])

  }
  
    
  return (

    <div className='font-Quicksand '>
<div>
      <h1 className='font-Poppins text-[2rem] ml-5' >Top Rated</h1>

      <Splide 

options={{
  rewind:true,
  // autoplay:true,
  // type:'loop',
  fixedWidth:'22.2rem',
  fixedHeight:'25rem'
  }}
>

     {
       products.filter(sm => sm.rating >4.7 ).map((e,index)=>(
        <SplideSlide className='mt-1' key={index}>

         <div  className=' w-[20rem] flex flex-col outline outline-1 outline-slate-300 relative h-[20rem] overflow-hidden ' id='showdiv'>
          <div>
          <img src={e.images[0]} alt="" className='aspect-[2/1] h-[20rem]  ' />
          </div>



          <div className='absolute top-[11rem] left-0 right-0 flex flex-col justify-end text-white  h-[20rem]' id='hidediv'> 
          <div className=' bg-black/25 flex flex-col gap-3'>
          <h1 className='flex justify-end border-b-2 border-b-slate-200 text-slate-200 gap-3 hover:border-b-white hover:text-white px-2 py-1'>Compare <ShareFat size={24} weight="duotone" /> </h1>
          <h1 className='flex justify-end border-b-2 border-b-slate-200 text-slate-200 gap-3 hover:border-b-white hover:text-white px-2 py-1'
          onClick={()=>addtocart(e)}
          >Add To Cart <ShoppingCart size={24} weight="duotone"/></h1>
          <h1 className='flex justify-end border-b-2 border-b-slate-200 text-slate-200 gap-3 hover:border-b-white hover:text-white px-2 py-1'
          
          
          //? check from movieBuzz 


          onClick={()=>navigate(`/${e.id}`,{state:{id:e.id}})}

          
          
          >View Details <ArrowFatLineRight size={24} weight="duotone" /></h1>
          <h1 className='flex justify-end border-b-2 border-b-slate-200 text-slate-200 gap-3 hover:border-b-white hover:text-white px-2 py-1'>Add To wish List <Heart size={24} weight="fill" className='hover:fill-red-600'/></h1>
          </div>

          </div>

          </div>

          <div className='flex justify-between w-[20rem] px-2 my-2 '>
            <div className='capitalize'>
            <h1 className='font-black '>{e.title}</h1>
             <h1>{e.category}</h1>
            </div>
              <div className='flex'>
              <h1>${e.price}</h1>
            </div>
          </div>
        </SplideSlide>

)) .splice(0,10)
}
</Splide>
</div>


<div >
      <h1 className='font-Poppins text-[2rem] ml-5'>Special Offers</h1>
      <Splide 
    options={{
    rewind:true,
  // type:'loop',
  // autoplay:true,
  fixedWidth:'22.2rem',
  fixedHeight:'25rem'
  
}
}
>

     {
       products.filter(sm => sm.discountPercentage >15 ).map((e,index)=>(
        <SplideSlide className='mt-1' key={index}>

        <div className=' w-[20rem] flex flex-col outline outline-1 outline-slate-300 relative h-[20rem] overflow-hidden ' id='showdiv'>
         <div>
         <img src={e.images[0]} alt="" className='aspect-[2/1] h-[20rem]  ' />
         </div>



         <div className='absolute top-[11rem] left-0 right-0 flex flex-col justify-end text-white  h-[20rem]' id='hidediv'> 
         <div className=' bg-black/25 flex flex-col gap-3'>
         <h1 className='flex justify-end border-b-2 border-b-slate-200 text-slate-200 gap-3 hover:border-b-white hover:text-white px-2 py-1'>Compare <ShareFat size={24} weight="duotone" /> </h1>
         <h1 className='flex justify-end border-b-2 border-b-slate-200 text-slate-200 gap-3 hover:border-b-white hover:text-white px-2 py-1'
         onClick={()=>addtocart(e)}
         >Add To Cart <ShoppingCart size={24} weight="duotone"/></h1>
         <h1 className='flex justify-end border-b-2 border-b-slate-200 text-slate-200 gap-3 hover:border-b-white hover:text-white px-2 py-1'
           onClick={()=>navigate(`/${e.id}`,{state:{id:e.id}})}
         >View Details <ArrowFatLineRight size={24} weight="duotone" /></h1>
         <h1 className='flex justify-end border-b-2 border-b-slate-200 text-slate-200 gap-3 hover:border-b-white hover:text-white px-2 py-1'>Add To wish List <Heart size={24} weight="fill" className='hover:fill-red-600'/></h1>
         </div>

         </div>

         </div>

         <div className='flex justify-between px-2 my-2 w-[20rem]'>
           <div className='capitalize'>
           <h1 className='font-black '>{e.title}</h1>
            <h1>{e.category}</h1>
           </div>
             <div className='flex'>
             <h1>${e.price}</h1>
           </div>
         </div>
       </SplideSlide>

)).splice(0,10)
}
</Splide>
</div>

    </div>
    
  )
}
