import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/home.css'; // styling file

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      opacity: 1,
      y: -50,
      duration: 1.5,
      ease: 'none',
    });
  }, []);
  

  return (
    <div className="home">
      <div className="container">
      <div className="wav">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1040 200">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L26.7,90.7C53.3,85,107,75,160,64C213.3,53,267,43,320,37.3C373.3,32,427,32,480,69.3C533.3,107,587,181,640,192C693.3,203,747,149,800,112C853.3,75,907,53,960,74.7C1013.3,96,1067,160,1120,208C1173.3,256,1227,288,1280,293.3C1333.3,299,1387,277,1413,266.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="hero">
        <h1 ref={textRef}>Welcome to Your <span className='span1'>To</span><span className='span2'>-Do</span> <span className='span3'>Universe</span> 🚀</h1>
        <p>Organize your life one task at a time.</p>
        <a href="/todo" className="btn">Get Started</a>
      </div>

      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1040 200">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L26.7,90.7C53.3,85,107,75,160,64C213.3,53,267,43,320,37.3C373.3,32,427,32,480,69.3C533.3,107,587,181,640,192C693.3,203,747,149,800,112C853.3,75,907,53,960,74.7C1013.3,96,1067,160,1120,208C1173.3,256,1227,288,1280,293.3C1333.3,299,1387,277,1413,266.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="footer">

      </div>
      </div>
    </div>
  );
};

export default Home;
