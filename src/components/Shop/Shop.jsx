import {
  ArrowFatLineRight,
  CaretRight,
  Heart,
  ShareFat,
  ShoppingCart,
} from "@phosphor-icons/react";
import React, { useContext, useEffect, useState } from "react";
import "./shop.css";
import Pagination from "./pagination";
import { ProductContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const [cate, setCate] = useState([]);
  const [sort, setSort] = useState("all");

  const navigate=useNavigate()

  const{products,cart,setCart,price,setPrice}=useContext(ProductContext)

  console.log(cart);

  const [modalc, setModalc] = useState(false);
  const [modalr, setModalr] = useState(false);
  const [modald, setModald] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage, setPostperpage] = useState(15);

  const lastpostIndex = currentPage * postperpage;
  const firstpostIndex = lastpostIndex - postperpage;

  let page = [];
  for (let i = 1; i <= Math.ceil(100 / setPostperpage); i++) {
    page.push(i);
  }

  // console.log("*********************");
  // console.log("currentPage" + currentPage);
  // console.log("postperpage" + postperpage);
  // console.log("firstpostIndex" + firstpostIndex);
  // console.log("lastpostIndex" + lastpostIndex);


  const toggleModalc = () => {
    setModalc(!modalc);
  };
  const toggleModalr = () => {
    setModalr(!modalr);
  };
  const toggleModald = () => {
    setModald(!modald);
  };


  const getCate = () => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCate(json);
      });
  };
  useEffect(() => {
    // getpros();
    getCate();
  }, []);



  let sortarr = ["all"];
  if (sort == "all") {
    sortarr = products.map((e,index) => e);
  } else {
    sortarr = products.filter((e,index) => e.category == sort);
    console.log(sortarr);
  }

  const addtocart=(e)=>{
    setCart([...cart,e])
    setPrice([...price,e.price])

  }
  

  // console.log(price);


  return (
    <div className="font-Quicksand">
      <h1 className="text-[3.2rem] font-Poppins pl-4 font-black">Products</h1>
      <div className="flex text-[1.2rem]">
        <div className="w-[25vw] ">
          <h1 className="mt-6 ml-3 flex items-center font-semibold">
            Shop by Category{" "}
            <CaretRight
              size={24}
              weight="fill"
              className="ml-6"
              onClick={toggleModalc}
              id={modalc ? "arrdwn" : ""}
            />
          </h1>
          <div
            className="px-6 hidden h-[25vh/] overflow-y-scroll"
            id={modalc ? "show" : ""}
          >
            <p
              className="border-b-[.2px] border-slate-300 "
              onClick={() => setSort("all")}
            >
              All
            </p>
            {cate.map((e,index) => (
              <p
                className="border-b-[.2px] border-slate-300 " key={index}
                onClick={() => setSort(e)}
              >
                {e}
              </p>
            ))}
          </div>

          <h1 className="mt-6 ml-3 flex items-center font-semibold">
            Shop by Rating{" "}
            <CaretRight
              size={24}
              weight="fill"
              className="ml-6"
              onClick={toggleModalr}
              id={modalr ? "arrdwn" : ""}
            />
          </h1>
          <div className="px-6  hidden" id={modalr ? "show" : ""}>
            <p className="border-b-[.2px] border-slate-300 text-orange-300 text-[1.5rem]">
              ★★★★☆ <span className="text-[1rem] text-black">&up</span>
            </p>
            <p className="border-b-[.2px] border-slate-300 text-orange-300 text-[1.5rem]">
              ★★★☆☆ <span className="text-[1rem] text-black">&up</span>
            </p>
            <p className="border-b-[.2px] border-slate-300 text-orange-300 text-[1.5rem]">
              ★★☆☆☆ <span className="text-[1rem] text-black">&up</span>
            </p>
            {/* <p className='border-b-[.2px] border-slate-300 text-orange-300 text-[1.5rem]'>★★★★☆</p> */}
          </div>

          <h1 className="mt-6 ml-3 flex items-center font-semibold">
            Discount Rate{" "}
            <CaretRight
              size={24}
              weight="fill"
              className="ml-6"
              onClick={toggleModald}
              id={modald ? "arrdwn" : ""}
            />
          </h1>
          <div className="px-6  hidden" id={modald ? "show" : ""}>
            <p className="border-b-[.2px] border-slate-300  text-[1rem]">
              15% Off or more
            </p>
            <p className="border-b-[.2px] border-slate-300  text-[1rem]">
              10% Off or more
            </p>
            <p className="border-b-[.2px] border-slate-300  text-[1rem]">
              5% Off or more
            </p>
          </div>

          {/* {prod.map((e)=>(
          <p className='border-b-[.2px] border-slate-300 '>{e.discountPercentage}</p>
          ))} */}
        </div>

        <div className="w-[75vw]">
          <div className="flex items-center justify-end  mr-8 mt-3">
            Sort By :
            <select
              name=""
              id=""
              className="mr-6 px-[1rem] py-[.5rem] rounded-md"
              // onChange={ e=>setSort(e.target.value) }
            >
              <option value="">-----------</option>
              <option value="bestoff">Best Offers</option>
              <option value="bestrate">Best Rating</option>
            </select>
            Show :
            <select
              className="mr-6 px-[1rem] py-[.5rem] rounded-md"
              id="show"
              onChange={(e) => setPostperpage(Number(e.target.value))}
            >
              <option value="15">15</option>
              <option value="30">30</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-5 p-6 place-items-center">
            {sortarr
              .map((e,index) => (
                <div key={index} className=" border-2 border-[#b3caca71] bg-[#8aaaaa36] rounded-md  mb-2">
                  <div
                    className=" w-[20rem] flex flex-col outline outline-1 outline-slate-300 relative h-[20rem] overflow-hidden "
                    id="showdiv"
                  >
                    <div>
                      <img
                        src={e.images[0]}
                        alt=""
                        className="aspect-video h-[20rem]  "
                      />
                    </div>

                    <div
                      className="absolute top-[12rem] left-0 right-0 flex flex-col justify-end text-white  h-[20rem]"
                      id="hidediv"
                    >
                      <div className=" bg-black/25 flex flex-col gap-3">
                        <h1
                          // onClick={() => setAdd(e)}
                          className="flex justify-end border-b-2 border-b-slate-200 text-slate-200 gap-3 hover:border-b-white hover:text-white px-2 py-1"
                        >
                          Compare <ShareFat size={24} weight="duotone" />{" "}
                        </h1>
                        <h1
                        onClick={()=>addtocart(e)}
                         className="flex justify-end border-b-2 border-b-slate-200 text-slate-200 gap-3 hover:border-b-white hover:text-white px-2 py-1">
                          Add To Cart{" "}
                          
                          <ShoppingCart size={24} weight="duotone" />
                        </h1>
                        <h1 className="flex justify-end border-b-2 border-b-slate-200 text-slate-200 gap-3 hover:border-b-white hover:text-white px-2 py-1"
                          onClick={()=>navigate(`/${e.id}`,{state:{id:e.id}})}
                        >
                          View Details{" "}
                          <ArrowFatLineRight size={24} weight="duotone" />
                        </h1>
                        <h1 className="flex justify-end border-b-2 border-b-slate-200 text-slate-200 gap-3 hover:border-b-white hover:text-white px-2 py-1">
                          Add To wish List{" "}
                          <Heart
                            size={24}
                            weight="fill"
                            className="hover:fill-red-600"
                          />
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between w-[20rem] px-2 my-2 ">
                    <div className="capitalize">
                      <h1 className="font-black ">{e.title}</h1>
                      <h1>{e.category}</h1>
                    </div>
                    <div className="flex">
                      <h1>${e.price}</h1>
                    </div>
                  </div>
                </div>
              ))
              .splice(firstpostIndex, postperpage)}
          </div>

          <div className=" mt-8 flex gap-6 justify-center">
            <Pagination
              totalpage={products.length}
              postperpage={postperpage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
