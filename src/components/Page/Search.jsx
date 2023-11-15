import { MagnifyingGlass } from '@phosphor-icons/react'
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../Context/Context'
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const {search,setSearch}=useContext(ProductContext)

    console.log(search);


    const [searchpro, setSearchpro] = useState([]);
    const getPro = () => {
      fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then((res) => res.json())
        .then((json) => {
          setSearchpro(json.products);
        });
    };
    useEffect(() => {
      getPro();
    }, [search]);
    console.log(searchpro);

    const navigate=useNavigate()

  return (    
      <div className="">
                <div className="inline-flex flex-col justify-center relative text-gray-500">
                    <div className="relative">
                        <input
                            onChange={(e)=>setSearch(e.target.value)}
                            type="text"
                            className="p-2 px-6 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white outline-none focus:ring-0 focus:ring-yellow-600 focus:border-transparent"
                            placeholder="search..."
                        />
                      <MagnifyingGlass  className="w-4 h-4 absolute left-2.5 top-3.5" size={20} />

                    </div>
                    {/* <h3 className="mt-2 text-sm">Gevonden:</h3> */}
                    <div className='absolute top-9 left-4 w-[12rem] z-30 '>
                    <ul className="bg-white border border-gray-100 w-[110%] mt-2 ">
                        {
                            search===''?(

                                <></>
                            ):
                            searchpro.map((e,index)=>(
                                <div >
                                 <li key={index} className="pl-4 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
                                onClick={()=>navigate(`/${e.id}`,{state:{id:e.id}})}
                                 
                                 >
                                    {/* <svg
                                        className="stroke-current absolute w-4 h-4 left-2 top-2"
                                    </svg> */}
                                     {/* <div className='stroke-current absolute w-4 h-4 left-2 top-2 bg-red-500 rounded-full'></div> */}
                                    <p>{e.title}</p>
                                    {/* <b>Gar</b>dameer - Italië */}
                                 </li>
                                </div>
                            )).splice(0,4)
                        }
                    </ul>
                    </div>
                </div>
            </div>
  )
}
