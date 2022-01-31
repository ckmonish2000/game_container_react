import logo from './logo.svg';
import './App.css';
import intro from "./intro.svg"
import scene1 from "./scene1.json"
import { useEffect, useState, useRef } from "react"
import lottie from "lottie-web"


const ratio = 1920 / 900
function App() {
  const [scale, setscale] = useState(window.innerWidth * 0.65 / 1000);
  const [scaleY, setscaleY] = useState(window.innerHeight / 900);
  const containerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const onResize = () => {
    const scale = (window.innerWidth * 0.65 / 1000)
    const scaley = window.innerHeight / 900
    setscale(scale)
    setscaleY(scaley)
  }

  useEffect(() => {
    if (containerRef.current) {
      lottie.loadAnimation({
        name: "placeholder",
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: scene1,
      })
    }
  }, [scene1, containerRef])

  return (
    <div className="vendorWrapper">
      <div className="playHold" style={{
        width: "1920px",
        height: "900px",
        transformOrigin: "210px 900px",
        left: "-210px",
        bottom: "0px",
        transform: `scaleX(${scale}) scaleY(${scaleY})`
      }}>

        {/* background */}
        <img src={intro} alt="" className="background" />
        {/* btn */}
        <img id="h" src="https://earlyedge.s3.ap-south-1.amazonaws.com/changes/11_evs_farm_and_jungle_y01/internal/images/efb860a4ccfb925473548e4162b6136a.svg" />
      </div>


      <div ref={containerRef}
        style={{ width: "20%", position: "absolute", bottom: "0%" }}
      >.</div>


      {/* my imple */}

      {/* <div className="parent">
        <img src={intro} alt="" className="bg" />
      </div>



      {/* <h1 >hello</h1> */}

    </div>
  );
}

export default App;
