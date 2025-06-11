import { Footer } from "../Footer/Footer";
import Styles from "./Hero.module.css";


export const Hero = () => {

  return (
    <>
      <section className={Styles.hr}>
        <h1 className={Styles.h1}>Hello <br/> i&apos;m a Software Developer</h1>
      </section>
      <Footer/>
    </>
    
  )
}
