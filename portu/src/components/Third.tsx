import {motion} from "framer-motion"
import HyperText from "./Hypertext"
import { div } from "framer-motion/client"
export default function(){
    return(
        // <motion.div className="h-[40rem] lg:h-screen w-screen flex justify-center items-center text-neutral-300 text-7xl  font-semibold bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden ">
        //     <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 "
        // fill="white"/>
        // <motion.div initial={{ opacity: 0.0, y: 40 }}
        //               whileInView={{ opacity: 1, y: 0 }}
        //               transition={{
        //                 delay: 0.3,
        //                 duration: 1.2,
        //                 ease: "easeInOut",
        //               }} className="flex justify-center items-center flex-col">

        //             <HyperText text="SKILLS"/>
        //             <div className="text-xl lg:text-3xl px-5 max-w-4xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus repellat, rem officia eaque explicabo iusto, architecto sapiente optio numquam distinctio quod hic rerum ut est tenetur provident at itaque sed atque in quos nihil deleniti laborum. Laborum dicta necessitatibus quam est neque nostrum, ullam, adipisci autem eligendi eius explicabo?</div>
        // </motion.div>
        // </motion.div>
        <div>

        <div className="relative flex-col min-h-screen bg-black text-white flex  items-center">
            {/* <SparklesCore
                background="transparent"
                maxSize={1}
                particleDensity={5}
                className="w-full h-full absolute top-0"
                particleColor="#FFFFFF"
                /> */}
            <div className="text-9xl font-medium mt-52">
                Skills
            </div>
            <div className="max-w-96 mt-10 text-3xl font-semibold md:max-w-[800px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis facere, cum impedit architecto incidunt error quibusdam consectetur porro laborum molestias magni molestiae reiciendis obcaecati dicta dolor quae aspernatur quod tempore eveniet magnam labore sunt! Qui tempore incidunt eaque quisquam laboriosam corrupti accusantium ut voluptate dolorum voluptatibus ipsam, ex sit saepe error sint. Aliquid, accusantium veniam.
            </div>
        </div>
        <div className="bg-black relative flex justify-center items-center border border-white">
        {/* <SparklesCore
                background="transparent"
                maxSize={1}
                particleDensity={5}
                className="w-full h-full absolute top-0"
                particleColor="#FFFFFF"
                /> */}

        </div>
                </div>
    )
}