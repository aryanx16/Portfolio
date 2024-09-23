import Navbar from "@/components/Navbar";
import { div } from "framer-motion/client";
import aryan from "../pics/samsung-removebg-previewshortbtm.png"
 
export default function Home() {
  return (
    <div className="text-white">

    <div className="bg-back min-h-screen flex flex-col ">
        <Navbar/>
        
        <div className=" h-full grid grid-cols-2">
          <div className="col-span-2 lg:col-span-1 flex justify-center lg:justify-end   lg:items-center lg:my-10">
            <div className="  shadow-md shadow-red-800 rounded-full  overflow-hidden ">
              <img className=" rounded-full w-72 h-80 lg:h-[500px] lg:w-[450px] " src={aryan} width={500} />
            </div>
            {/* <div className="relative w-80 h-80 overflow overflow  border rounded-full  bg-gray-200">
  <img className="absolute w-96 h-96 -top-16" src={aryan} width={500} alt="Your Image" />
</div> */}

          </div>

          <div className="col-span-2 lg:col-span-1 lg:mx-5  flex flex-col justify-center lg:items-start items-center h-full">
            <div className="text-5xl font-bold">
              Hi, it's <span className="text-red-500">Aryan</span> 
            </div>
            <div className="lg:text-4xl text-3xl font-semibold mx-1">
              I am a web developer
            </div>
            <div className=" min-w-[320px] sm:max-w-[500px] flex justify-center items-center lg:mx-0 ml-5 text-lg mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus repudiandae animi explicabo impedit fuga assumenda suscipit eveniet, beatae iste nemo magnam id possimus ipsam. Illum, quas magni veritatis autem nisi distinctio qui repreh
            </div>
          </div>
        </div>
    </div>

    <div className="bg-black h-screen">

    </div>
    </div>
  );
}