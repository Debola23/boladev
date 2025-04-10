import  { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Styles from './Tp.module.css'
export const TextParallaxContentExample = () => {



  return (
    <div>
    <TextParallaxContent
      imgUrl="/Images/bola2.jpeg"
      subheading="Solaja"
      heading="Emmanuel Adebola">
      <ExampleContent1 />
    </TextParallaxContent>

    <TextParallaxContent
      imgUrl="/Images/tw2.jpg"
      subheading="Github Profile"
      heading="View of my coding journey.">
      <ExampleContent2 />
    </TextParallaxContent>

    <TextParallaxContent
      imgUrl="/Images/rs.webp"
      subheading="Portfolio"
      heading="Resume/Cv">
      <ExampleContent3 />
    </TextParallaxContent>
  </div>
  )
}


const IMG_PADDING = 12;


const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {

  return (
    <div style={{paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING,}}>
      <div className="relative h-[160vh] md:h-[120vh] sm:h-[100vh]" id={Styles.Aimg}>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};


const StickyImage = ({ imgUrl }) => {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);


  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl">

        <motion.div
            className="absolute inset-0 bg-neutral-950/70"
            style={{
                opacity,
            }}/>
        </motion.div>
  );
};


const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });


  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);


  return (

    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white">
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent1 = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12" id={Styles.F} >
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4" >Introduction</h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
            I’m a Front-end  developer with a passion for building engaging and functional digital experiences. <br/>
            My journey into coding started as a challenge, and over time,<br/>
            I’ve advanced my skills through online courses and hands-on projects.<br/>
            I believe that the best way to learn is by doing, so I’ve built numerous projects<br/>
            with each one pushing my skills further and exposing me to new challenges.<br/>
            Through online resources, I’ve dived deep into concepts like state management, API integrations, and design systems.<br/>
            Beyond just writing code, I focus on creating scalable, maintainable, and user-friendly applications<br/>
            I’m always looking to grow, collaborate, and take on new challenges<br/>
            whether it’s an exciting project, an open-source contribution, or a professional opportunity<br/>
            I’m eager to keep building and learning. Let’s connect! 🚀
        </p>
      </div>
    </div>
  );
  
  const ExampleContent2 = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12" id={Styles.F}>
        <h2 className="col-span-1 text-2xl font-semibold d md:col-span-4" >
            You can also navigate to my Vercel from my Github to see more.
            <a href="https://github.com/Debola23" target="_blank" rel="noopener noreferrer">
                <section className="mt-[2rem] flex  ">
                <button
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                    href="/">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 15 15"
                    className="w-5">
                    <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        fill="currentColor"
                        d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z">

                        </path>
                    </svg>
                    <span
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    GitHub
                    </span>
                </button>
                </section>
            </a>
        </h2>
     
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl ">
                Check out my GitHub to see the projects I’ve been working on.<br/>
                From frontend experiment,my repos showcase my coding journey<br/>
                and problem-solving skills and passion for building<br/>
                Feel free to explore.
            </p>
        </div>
  </div>
  );
  
  const ExampleContent3 = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12" id={Styles.F}>
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4" >
           Protfolio
           <section className="flex mt-[2rem]">
                <button className={Styles.bt} onClick={() => window.open('/resume.pdf', '_blank')}>
                    <span>CV</span>
                    <span className={Styles.Icon}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className={Styles.svgIcon}>
                            <path
                                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z">
                            </path>
                        </svg>
                    </span>
                </button>
            </section>
              
            
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                Interested in my experience and technical skills? <br/>
                Click the button to see my professional background, <br/>
                projects, and expertise in software development.
            </p>
        </div>
  </div>
  );


 