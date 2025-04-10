import { Bar } from '../../components/Bar/Bar'
import Styles from './Skills.module.css'
import { motion } from "framer-motion"






export const Skills = () => { 

  const skills = [
    {
      title: 'Front-End Development',
      description: 'Building engaging and user-friendly web interfaces using modern frameworks and technologies.',
      icons: ['html', 'javascript', 'react'],
      bgColor: 'bg-black text-white',
     
    },
    {
      title: 'Styling & Design',
      description: 'Crafting visually appealing and responsive designs with advanced styling tools and frameworks.',
      icons: ['css', 'reactbootstrap', 'tailwind'],
      bgColor: ' bg-[#073E59] text-white rounded-lg ',
     
    },
    {
      title: 'Hosting & Deployment',
      description: 'Deploying applications using cloud platforms for scalability and efficiency.',
      icons: [ 'Vercel', 'Cloudflare'],
      bgColor: 'bg-gray-700 text-white',
 
    },
    {
      title: 'Web Animations',
      description: 'Creating seamless animations and transitions to enhance user engagement.',
      icons: ['framer'],
      bgColor: 'bg-gray-200 text-gray-900 rounded-lg',
   
    },
    {
      title: 'Version Control & Collaboration',
      description: 'Managing code efficiently with Git and collaborating seamlessly on projects.',
      icons: ['github', 'Git'],
      bgColor: 'bg-gray-700 text-white',
  
    },
    {
      title: 'UI/UX Design',
      description: 'Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.',
      icons: ['Figma'],
      bgColor: 'bg-gray-200 text-black',
     
    },
  
  ];
  

  return (
    <div className={Styles.Skills}>
      <section className={Styles.hr}>
        <h1 className={Styles.h1}>
          <div className="flex flex-col items-center px-4 py-16 sm:py-24 text-yellow-50">
            <h1 className="max-w-2xl text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug text-black">
              Skills That Fuel My <br/>
              <span className="relative mt-4 inline-block">
                Passion
                <svg 
                  viewBox="0 0 286 73" 
                  fill="none" 
                  className="absolute -left-4 sm:-left-6 md:-left-8 -right-2 lg:-[1.15rem]  sm:top-[-0.71rem]  w-[10rem] sm:w-[12rem] md:w-[15rem]  lg:w-[18rem] h-[3rem] sm:h-[4rem] lg:h-[4.4rem] bottom-0 translate-y-1">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                    stroke="#FACC15"
                    strokeWidth="3"/>
                  </svg>
              </span>
            </h1>
          </div>
        </h1>
      </section>
      <section  className={Styles.Stack}>
        <div className="flex justify-center items-center p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl ${skill.bgColor} shadow-lg hover:scale-105 transition-all`}>
                <div className="flex gap-4 mb-4">
                  {skill.icons.map((icon, i) => (
                    <img 
                      key={i} 
                      src={`./Images/${icon}.png`} 
                      alt={icon} 
                      className="w-10 h-10 bg-white rounded-lg p-2"/>
                  ))}
                </div>
                <h4 className="text-xl font-bold mb-2">{skill.title}</h4>
                <p className="text-sm  leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Bar/>
    </div>
  )
}
