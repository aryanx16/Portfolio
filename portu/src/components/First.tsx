import { AuroraBackground } from "./aurora";
import Navbar from "./Navbar";
import aryan from "../pics/samsung-removebg-previewshortbtm.png"
import { motion } from "framer-motion"
export default function First() {
  return (
    <AuroraBackground>
      {/* <span className="text-sky-600 text-7xl font-bold">Aryan</span> */}

      <div className="bg-black min-h-screen min-w-screen flex flex-col ">
        <Navbar />
        <div className=" h-full grid grid-cols-2 mt-10">
          <motion.div initial={{ opacity: 0.0, y: 40 }}

            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              duration: 0.5,
              ease: "easeInOut",
            }} className="col-span-2  items-start lg:col-span-1 flex justify-center lg:justify-end   lg:items-center ">
            <div className="relative z-10  shadow-md w-72 h-80 lg:h-auto lg:w-auto rounded-full    ">
         

              <img className="  w-72 h-80 lg:h-[600px] lg:w-[550px] rounded-full lg:rounded-none " src={aryan} width={500} />
            </div>
          </motion.div>

          <div className=" text-neutral-100  col-span-2 lg:col-span-1 lg:mx-5  flex flex-col justify-center lg:justify-center lg:items-start items-center h-full ">
            {/* <CardContainer className=""> */}
            {/* <CardBody> */}
            {/* <CardItem translateZ="50" className="flex justify-center items-center flex-col lg:items-start"> */}
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className=" z-50 text-5xl lg:text-7xl font-bold">
              Hi, it's <span className="font-serif text-sky-400  z-50">Aryan</span>
            </motion.div>

            <motion.div initial={{ opacity: 0.0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }} className="lg:text-4xl text-3xl font-semibold mx-1">
              I am a web developer,problem solver,coder
            </motion.div >
            <motion.div initial={{ opacity: 0.0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }} className="text-white text-xl  w-2/3 ">
              {/* <div className="text-white min-w-[320px] sm:max-w-[500px] flex justify-center items-center lg:mx-0 ml-9 text-lg mt-4"> */}
              I want to learn everything in the tech world
            </motion.div >
            <motion.div initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0,
                duration: 0.6,
                ease: "easeInOut",
              }} className="flex mt-2 gap-5">
              <div className=" px-1 border rounded-lg text-neutral-100 font-semibold text-lg bg-sky-600">Resume</div>


              <div className="px-1 rounded-lg font-semibold text-lg backdrop-blur-xl">Projects</div>

            </motion.div>
            {/* </CardItem>
                </CardBody>
              </CardContainer> */}
          </div>
        </div>
      </div>
    </AuroraBackground>
  )
}