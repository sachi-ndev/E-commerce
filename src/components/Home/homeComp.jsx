import React from 'react'

import img1 from './../../assets/photo_1_2023-09-05_15-08-04.jpg'
import img2 from './../../assets/photo_2_2023-09-05_15-08-04.jpg'
import img3 from './../../assets/photo_3_2023-09-05_15-08-04.jpg'

import img4 from './../../assets/Home/photo_1_2023-09-06_11-49-02.jpg'
import img5 from './../../assets/Home/photo_2_2023-09-06_11-49-02.jpg'
import img6 from './../../assets/Home/photo_3_2023-09-06_11-49-02.jpg'


import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import { ArrowClockwise, Truck } from '@phosphor-icons/react';




export default function HomeComp() {
  return (
    <div className=''>
       <Splide
        //  hasTrack={ false }
          options={ {
            rewind: true,
            type:'loop'
          } }
        >
            {/* <SplideTrack> */}

            <SplideSlide>
                <img className='ml-[5rem]' src={img1}  alt="" />
            </SplideSlide>

            <SplideSlide>
                <img className='ml-[5rem]' src={img2} alt="" />
            </SplideSlide>

            <SplideSlide>
                <img className='ml-[5rem]' src={img3} alt="" />
            </SplideSlide>

            {/* </SplideTrack> */}
        </Splide>
        <div className='flex justify-between items-center px-10'>
            <h1 className='shadow-xl'>2 Year Warranty</h1>
            <h1 className='flex shadow-xl  gap-1 items-center'>
            <Truck size={28} weight="fill" /> Free Shipping</h1>
            <h1 className='flex items-center gap-1 shadow-xl'><ArrowClockwise size={20} weight="fill" />
            Return Policy in 1 Week</h1>
        </div>

        <div className='h-[100vh] w-[100vw] flex gap-[2rem] p-[3rem] mt-5'>
            <div>
            <img src={img4} alt="" />
            </div>
            <div className='flex flex-col gap-6'>
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            </div>

        </div>
    </div>
  )
}

