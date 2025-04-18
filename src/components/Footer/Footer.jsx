import Styles from './Footer.module.css'
import { motion } from "framer-motion"
import { SlideUp } from '../../utility/animation'


export const Footer = () => {

    
  return (
    <motion.section variants={SlideUp (2.0)} initial="hidden"  whileInView={"visible"}  className={Styles.Footer}> 
        <a href="mailto:emmanueladebola98@gmail.com" className='cursor-pointer' id={Styles.foot}>
            <button className=" cursor-pointer bg-[#000000] text-white rounded-full w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center text-xs sm:text-sm shadow-md">
                Get in touch
            </button>
        </a>
    </motion.section>
  )
}
