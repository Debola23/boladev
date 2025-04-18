
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
    src: "/Images/clean.png",
    link: "/projects/cleanify",
  },
  {
    id: 2,
    src: "/Images/coin.png",
    link: "https://coins-red.vercel.app/",
  },
  {
    id: 3,
    src: "/Images/homes.png",
    link: "https://real-estate-mhek.vercel.app/",
  },
  {
    id: 4,
    src: "/Images/todo.png",
    link: "https://todo-five-gilt-41.vercel.app/",
  },
  {
    id: 5,
    src: "/Images/photobox.png",
    link: "/projects/cleanify",
  },
  {
    id: 6,
    src: "/Images/power.png",
    link: "https://power-set-omega.vercel.app/",
  },
  {
    id: 7,
    src: "/Images/riverstore.png",
    link: "https://river-store-woad.vercel.app/",
  },
  {
    id: 8,
    src: "/Images/shopbox.png",
    link: "https://shopbox.vercel.app/",
  },
  {
    id: 9,
    src:"/Images/loading.jpeg",
  },
  {
    id: 10,
    src: "/Images/loading.jpeg",
  },
  {
    id: 11,
    src: "/Images/loading.jpeg",
  },
  {
    id: 12,
    src: "/Images/loading.jpeg",
  },
  {
    id: 13,
    src: "/Images/loading.jpeg",
  },
  {
    id: 14,
    src: "/Images/loading.jpeg",
  },
  {
    id: 15,
    src: "/Images/loading.jpeg",
  },
  {
    id: 16,
    src: "/Images/loading.jpeg",
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
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;