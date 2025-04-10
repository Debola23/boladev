import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}>
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};



const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full">
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-[3rem] w-full h-[100vh] md:h-[85vh] sm:h-[50vh]
             sm:[clip-path:polygon(14.2%_14.2%,85.8%_14.2%,85.8%_85.8%,14.2%_85.8%)]
             sm:bg-[length:147.32%] sm:opacity-100 sm:bg-center sm:bg-no-repeat"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: "url('/Images/homes.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}/>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="/Images/photobox.png"
        alt="photobox"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="/Images/power.png"
        alt="poewrs set"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="/Images/clean.png"
        alt="clean"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="/Images/riverstore.png"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50">
        Projects
      </motion.h1>
      <ScheduleItem title="Clean" discription="A fully functional Dry-Cleaning website with a modern design." stack="React & Tailwind"    github="https://github.com/Debola23"  live="https://github.com/Debola23" />
      <ScheduleItem title="Coming soon" discription="Loading" stack="Loading"  github="/"  live="/" />
      <ScheduleItem title="Power Sets" discription="A fully functional Gym website with a modern design." stack="React & Tailwind" github="https://github.com/Debola23/Power-Set"  live="https://power-set-omega.vercel.app/" />
      <ScheduleItem title="Coin Tracker" discription="This is a Crypto tracker website with an Api implementation." stack="React, Api & Tailwind"  github="https://github.com/Debola23/Coins"  live="https://coins-red.vercel.app/" />
      <ScheduleItem title="River Store" discription="This is an E-commerce website with a modern design." stack="React, ReactBootstrap & Tailwind"  github="https://github.com/Debola23/river-store"  live="https://river-store-woad.vercel.app/" />
      <ScheduleItem title="Todo List" discription="This is a Todo list app with standard functionality." stack="React"  github="https://github.com/Debola23/todo"  live="https://todo-five-gilt-41.vercel.app/" />
      <ScheduleItem title="Homes" discription="This is a Real-Estate site with a  simple and neat user interface." stack="React"  github="https://github.com/Debola23/real-estate"  live="https://real-estate-mhek.vercel.app/" />
      <ScheduleItem title="Shop Box" discription="Ecommerce website with a modern design.(One of my first ever projects)" stack="Html, Css & JavaScript"  github="https://github.com/Debola23/Shopbox"  live="https://shopbox.vercel.app/" />
    </section>
  );
};

const ScheduleItem = ({ title, discription, stack, github, live }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9">
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{discription}</p>
        <p className="text-sm uppercase text-zinc-500 mt-2">{stack}</p>
      </div>
      <div className="flex flex-col items-end text-sm uppercase text-zinc-500">
        <div className="flex gap-3 mt-2">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              <img src="/Images/githubwhite.png" alt="" className="h-[1.5rem] w-[1.5rem]" />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
              <img src="/Images/link.png" alt="" className="h-[1.5rem] w-[1.5rem]" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};