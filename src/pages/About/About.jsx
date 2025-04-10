import { Bar } from "../../components/Bar/Bar"
import { TextParallaxContentExample } from "../../components/TextParallaxContentExample/TextParallaxContentExample"
import Styles from "./About.module.css"


export const About = () => {
  return (
    <div className={Styles.About}>
      <TextParallaxContentExample/>
      <Bar/>
    </div>
  )
}
