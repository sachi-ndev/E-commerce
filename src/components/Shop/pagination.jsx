import React from 'react'


export default function Pagination({totalpage,postperpage,setCurrentPage}) {
let page=[]
for(let i=1;i<=Math.ceil(totalpage/postperpage);i++){
    page.push(i)
}

    return (
        <>
            {page.map((e,index)=>(
                    <button key={index} className='bg-slate-100/20 hover:bg-slate-600 hover:text-white px-4 py-2 rounded-md border-[2px] border-slate-500' 
                    onClick={()=>setCurrentPage(e)}>{e}</button>
            ))}    
        </>

  )
}
