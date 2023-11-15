import { FacebookLogo, GithubLogo, LinkedinLogo, YoutubeLogo } from '@phosphor-icons/react'
import React from 'react'
import payment from './../../assets/payment.png'

export default function Footer() {
  return (
    <div className='w-[100vw]  bg-black/5 mt-24 flex flex-col items-center justify-center'>
<div>
<div className='flex items-center justify-center h-[25rem] gap-20'>
     <div className='w-96 h-[23rem] gap-7 flex flex-col  '>
        <h1 className='text-xl font-bold '>More about  E-Shop</h1>
          <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint ab ullam, numquam nesciunt in.</p>
            <div className='flex gap-4'>
            <YoutubeLogo className='bg-black rounded-full flex items-center justify-center p-1' size={32} color="#F4EBEB" weight="fill" />
            <GithubLogo className='bg-black rounded-full flex items-center justify-center p-1' size={32} color="#F4EBEB" weight="fill" />
            <FacebookLogo className='bg-black rounded-full flex items-center justify-center p-1' size={32} color="#F4EBEB" weight="fill" />
            <LinkedinLogo className='bg-black rounded-full flex items-center justify-center p-1' size={32} color="#F4EBEB" weight="fill" />
                        </div>
                           </div>
      <div className='w-48 h-[23rem] gap-5 flex flex-col  '>
        <h1 className='text-xl font-bold '>Shop</h1>
           <p className='text-lg w-24 hover:border-b-2 hover:border-black/30 '>Accesories</p>
            <p className='text-lg w-24 hover:border-b-2 hover:border-black/30 '>Clothes</p>
            <p className='text-lg w-24 hover:border-b-2 hover:border-black/30 '>Electronics</p>
            <p className='text-lg w-36 hover:border-b-2 hover:border-black/30 '>Home appliances</p>
            <p className='text-lg w-28 hover:border-b-2 hover:border-black/30 '>New Arrivals</p>
             </div>
      <div className='w-48 h-[23rem] gap-5 flex flex-col  '>
         <h1 className='text-xl font-bold '>Your account</h1>
            <p className='text-lg w-28 hover:border-b-2 hover:border-black/30 '>Profile</p>
             <p className='text-lg w-28 hover:border-b-2 hover:border-black/30 '>Orders</p>
             <p className='text-lg w-28 hover:border-b-2 hover:border-black/30 '>Addresses</p>
             <p className='text-lg w-36 hover:border-b-2 hover:border-black/30 '>Account Details</p>
             <p className='text-lg w-36 hover:border-b-2 hover:border-black/30 '>Payment Options</p>
             </div>
        <div className='w-96 h-[23rem] gap-7 flex flex-col  '>
           <h1 className='text-xl font-bold '>Subscribe to our newsletter.</h1>
              <p className='text-lg'>A at pellentesque et mattis porta enim elementum.</p>
              <div className='flex gap-3'>
              <input className='w-80 h-10 border-b-2  bg-black/5 p-4' type="email" placeholder='Insert your email...*' />
              <button className='bg-slate-200 w-32 h-10 hover:bg-black hover:text-white'>Subscribe</button>
              </div>
              <img src={payment} alt="" />
              </div>
</div>
</div>
<div className='w-[80vw] h-[4rem] flex items-center justify-center border-t-2'>
  <p className='text-sm'>Copyright 2022 | E-shop | All Rights Reserved | <span className='font-semibold'>Powered by ReactBD.com</span></p>
</div>
    </div>
  )
}