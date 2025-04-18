import { Bar } from "../../components/Bar/Bar";
import ShuffleHero from "../../components/ShuffleHero/ShuffleHero";
import Styles from "./Project.module.css";



export const Project = () => {
  return (
   <>
      <div className={Styles.Project}>
        <section className={Styles.hr}>
          <h1 className={Styles.h1}>
            Welcome To My Realm Of<br/>  
            Wild  Projects And<br/> 
            Awesome Creations
          </h1>
        </section>
        <section className="mt-[15rem]">
        <ShuffleHero/>
        </section>
        <Bar/>
      </div>
   </>
  )
}
