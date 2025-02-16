import Navbar from "@/components/Navbar";
import aryan from "../pics/samsung-removebg-previewshortbtm.png"
import { AuroraBackgroundDemo } from "@/components/auroraDemo";
import { AuroraBackground } from "@/components/aurora";
import { CardBody, CardContainer, CardItem } from "@/components/3dcard";

import { motion } from "framer-motion";
import First from "@/components/First";
import Second from "@/components/Second";
import Third from "@/components/Third";



export default function Home() {
  return (
    <div className="">
      <First/>     
      <Second/>
      {/* <Third/> */}
    </div>
  );
}