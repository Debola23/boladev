
import { useEffect, useRef, useState } from "react";
import Styles from './ShuffleHero.module.css'

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div className={Styles.sH}>
        <span className="block mb-4 text-xs md:text-sm text-black font-medium">
            From bold ideas to functional brilliance
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
            Each Project Below Is A Playground Of Creativity And Code. 
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
            Each one reflects a focus on clean design, efficient code,
            and user-centered thinkingcrafted to stand out and built to perform.
        </p>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/Images/loading.jpeg",
    link: "",
  },
  {
    id: 2,
    src: "/Images/jobplus.png",
    link: "https://job-plus.vercel.app/",
  },
  {
    id: 3,
    src: "/Images/crib.png",
    link: "https://crib-henna.vercel.app/",
  },
  {
    id: 4,
    src: "/Images/power.png",
    link: "https://power-set-omega.vercel.app/",
  },
  {
    id: 5,
    src: "/Images/riverstore.png",
    link: "https://river-store-woad.vercel.app/",
  },
  {
    id: 6,
    src: "/Images/loading.jpeg",
      link: "",
  },
 
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <>
     <a
      key={sq.id}
      href={sq.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full block">
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-300 hover:scale-105"
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "cover",
        }}>
      </div>
    </a>
    </>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 30000);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-4 h-[36rem] gap-10" id={Styles.projectG}>
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;