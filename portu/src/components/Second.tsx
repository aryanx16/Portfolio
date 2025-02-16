
import Particles from '../components/Particlesbits';
import { motion } from "framer-motion"
const Second = () => {
  return (
    <div className='bg-black text-white text-center '>


      <div className='min-h-screen text-blue-400 text-5xl' style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={400}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={40}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div className='absolute top-0 text-sky-500 text-xl'>
          <motion.div
          initial={{opacity:0}}
            animate={{
              
              y: [0, 15, 0],
              opacity: [1, 0.9, 1],
              // rotate: [-1, 1, -1]  
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
            }}
            className='text-7xl text-white flex justify-center font-bold  items-center w-screen pt-20'>
            Skills
          </motion.div>
        </div>
      </div>

    </div>
  )
}

export default Second
