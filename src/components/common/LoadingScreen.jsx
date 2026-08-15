import { motion } from 'framer-motion'

export default function LoadingScreen(){
 return <motion.div className="brand-loader" initial={{opacity:1}} exit={{opacity:0}} transition={{duration:.15,ease:'easeInOut'}}>
  <motion.div className="loader-emblem" initial={{opacity:0,scale:.78}} animate={{opacity:1,scale:1}} transition={{duration:.32,ease:[.22,1,.36,1]}}>
   <motion.span animate={{rotate:360}} transition={{duration:3,repeat:Infinity,ease:'linear'}}/>
   <motion.img src="/images/logo/rangilo-rajwado-logo.png" alt="Rangilo Rajwado" animate={{scale:[1,1.04,1]}} transition={{duration:.65,repeat:Infinity,ease:'easeInOut'}}/>
  </motion.div>
  <motion.p initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay:.18,duration:.2}}>पधारो म्हारे देस</motion.p>
  <motion.div className="loader-line" initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:.5,ease:'easeInOut'}}/>
 </motion.div>
}
