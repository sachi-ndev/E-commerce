import React, { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const[price,setPrice]=useState([])
  
  const [cart,setCart]=useState([])
  // const [hidesearch,setHidesearch]=useState(true)
  const[search,setSearch]=useState('')

  const getPro = () => {
    fetch("https://dummyjson.com/products/?limit=85")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products);
      });
  };
  useEffect(() => {
    getPro();
  }, []);

  return (
    <ProductContext.Provider value={{products,cart,setCart,price,setPrice,search,setSearch}}>
      {children}
    </ProductContext.Provider>
  );
};

export {AppProvider , ProductContext  };

