import Navbar from "@/components/Navbar";
import aryan from "../pics/samsung-removebg-previewshortbtm.png"
import { AuroraBackgroundDemo } from "@/components/auroraDemo";
import { AuroraBackground } from "@/components/aurora";
import { CardBody, CardContainer, CardItem } from "@/components/3dcard";

import { motion } from "framer-motion";
import { FloatingNavDemo } from "@/components/floatingNavdemo";



export default function Home() {
  return (
    <div className="text-white">
     
      <AuroraBackground>

        <div className="bg-back min-h-screen flex flex-col ">
      <Navbar />

          <div className=" h-full grid grid-cols-2 mt-10">
            <motion.div initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }} className="col-span-2  items-start lg:col-span-1 flex justify-center lg:justify-end   lg:items-center lg:my-10">
              <div className=" z-10  shadow-md w-72 h-80 lg:h-auto lg:w-auto  rounded-full     overflow-hidden ">
                <img className=" rounded-full w-72 h-80 lg:h-[500px] lg:w-[450px] " src={aryan} width={500} />
              </div>
            </motion.div>

            <div className=" text-white  col-span-2 lg:col-span-1 lg:mx-5  flex flex-col justify-center lg:justify-center lg:items-start items-center h-full ">
              <CardContainer className="">
                <CardBody>
                  <CardItem translateZ="50" className="flex justify-center items-center flex-col lg:items-start">
                    <motion.div
                      initial={{ opacity: 0.0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                      className="text-5xl font-bold">
                      Hi, it's <span className="text-red-600">Aryan</span>
                    </motion.div>

                    <motion.div initial={{ opacity: 0.0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                      }} className="lg:text-4xl text-3xl font-semibold mx-1">
                      I am a web developer
                    </motion.div >
                    <motion.div initial={{ opacity: 0.0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                      }} className="text-white  w-2/3 ">
                      {/* <div className="text-white min-w-[320px] sm:max-w-[500px] flex justify-center items-center lg:mx-0 ml-9 text-lg mt-4"> */}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus repudiandae animi explicabo impedit fuga assumenda suscipit eveniet, beatae iste nemo magnam id possimus ipsam. Illum, quas magni veritatis autem nisi distinctio qui repreh
                    </motion.div >
                    <motion.div className="flex mt-2 gap-5">
                      <div className=" px-1 rounded-lg font-semibold text-lg bg-red-600">Resume</div>
                      <div className="px-1 rounded-lg font-semibold text-lg backdrop-blur-xl">Projects</div>
                    </motion.div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </AuroraBackground>
                      
      <div className="bg-black h-screen">
      <FloatingNavDemo/>
      </div>
      <AuroraBackgroundDemo />
    </div>
  );
}