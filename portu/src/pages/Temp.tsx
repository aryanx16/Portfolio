import { BorderBeamDemo } from "@/components/Borderbeam"
import { FloatingNavDemo } from "@/components/floatingNavdemo"
// import Shi from "../../@/components/ui/ShineBorderDemo" 
import NumberTickerDemo from "@/components/NumberTickerDemo"
// import { ThreeDCardDemo } from "@/components/3dcard"
import ShineBorderDemo from "@/components/ShineDemo"
import { ThreeDCardDemo } from "@/components/threedemo"
export default function (){
    return(

        <>
        <NumberTickerDemo/>
        {/* <ThreeDCardDemo/> */}
        <ShineBorderDemo/>
        <ThreeDCardDemo/>
        {/* <MovingBorderDemo/> */}
        <FloatingNavDemo/>
        </>
    )
}