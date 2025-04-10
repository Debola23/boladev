import styles from'./App.module.css';
import { Hero } from './components/Hero/Hero';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Bar } from './components/Bar/Bar';




function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  return (
    <>
      <div className={styles.Body}>
        <Bar/>
        <Hero/>
      </div>
    </>
  )
}

export default App
