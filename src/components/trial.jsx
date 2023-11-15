// import React from 'react'
// import { useState,useEffect } from 'react'
// import Draggable from "react-draggable";
// import {Draggable, Droppable} from "react-tiny-drag-drop";

// export default function Trial() {
//     const onDrop=((i) => alert(i));
//     const[pro,setPro]=useState([])

//     const getPro = ()=>{
//         fetch('https://dummyjson.com/products/?limit=10')
//         .then(res=>res.json())
//         .then((json)=>{
//             // console.log(json);
//             setPro(json.products)
//         })
//     }
// useEffect(()=>{
//     getPro()
// },[])
// console.log(pro)


//   return (
//     <div>
//       <ul>
        
//       {/* <Draggable> */}
//       <div>I can now be moved around!</div>
//       <Droppable context="item" onDrop={onDrop}><div>Drop here...</div></Droppable>
//     <Draggable context="item" dataKey={1}>Item 1</Draggable>
//     <Draggable context="item" dataKey={2}>Item 2</Draggable>
  
//         {/* {
//             pro.map(e=>(
//                 <li>{e.title}</li>
//             ))
//         } */}
//           {/* </Draggable> */}
//       </ul>
//     </div>
//   )
// }
