import HomeComp from "../Home/homeComp"
import Homeprds from "../Home/homeprds"
// import Trial from "./trial"

export  function Home() {
  return (
    <div className=''>
      <HomeComp/>
      <div className="mt-[5rem]">
      <Homeprds />

      </div>
      {/* <div className="w-screen h-screen flex items-center justify-center">

      <Trial/>
      </div> */}
       
    </div>
  )
}



