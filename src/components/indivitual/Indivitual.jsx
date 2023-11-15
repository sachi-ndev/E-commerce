import React, {useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { ProductContext } from '../Context/Context';

export default function Indivitual() {

    const location = useLocation()

  const{cart,setCart,price,setPrice}=useContext(ProductContext)

  const addtocart=(e)=>{
    setCart([...cart,e])
    setPrice([...price,e.price])

  }
  


    const[ind,setInd]=useState([{
      "id": 24,
      "title": "cereals muesli fruit nuts",
      "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
      "price": 46,
      "discountPercentage": 16.8,
      "rating": 4.94,
      "stock": 113,
      "brand": "fauji",
      "category": "groceries",
      "thumbnail": "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
      "images": [
          "https://i.dummyjson.com/data/products/24/1.jpg",
          "https://i.dummyjson.com/data/products/24/2.jpg",
          "https://i.dummyjson.com/data/products/24/3.jpg",
          "https://i.dummyjson.com/data/products/24/4.jpg",
          "https://i.dummyjson.com/data/products/24/thumbnail.jpg"
      ]
  }])

    const getPro = () => {
        fetch(`https://dummyjson.com/products/${location.state.id}`)
          .then((res) => res.json())
          .then((json) => {
            setInd(json);
          });
      };
      useEffect(() => {
        getPro();
      }, [location]);

      console.log(ind);
      
  return (
    <div className='w-screen h-[calc(100vh-10rem)] flex items-center justify-center'>
      <div className='h-[90%] w-[90%]  flex flex-col items-center justify-center md:flex-row' >

     <img src={ind.thumbnail}
     className='aspect-square h-[70%]' 
     alt="" /> 
     <div className='w-[50%] h-[90%] mt-4 flex flex-col items-start justify-center md:gap-[5rem] my-auto ml-[2rem]'>
    <div className='flex'>
      <div className='w-[70%]'>
    <h1 className='text-[1.3rem] font-bold'>{ind.brand}:</h1>
    <h1 className='font-bold text-slate-700'>{ind.title}</h1>
    <h1 className='w-[100%] text-justify'>{ind.description}</h1>
    <p className='w-[25rem] mt-4 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit fuga eveniet libero cupiditate blanditiis. Vero nemo doloribus iure tempora neque!</p>
      </div>
    <div>
      {ind.rating}⭐
    </div>
    </div>

  

    <div className='flex w-[90%] gap-5 items-start justify-start md:justify-center text-[2rem]'>
      <h1 className='text-red-600'>-{ind.discountPercentage}%</h1>
      <h1 className='font-semibold'> ${ind.price}</h1>
      
    </div>
    <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover-bg-blue-600"
    onClick={()=>addtocart(ind)}
    >Add to Cart</button>

    </div>
     </div>


    </div>
  )
}
