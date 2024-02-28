import { useEffect, useRef, useState } from "react";
import pcFigure from "../../assets/otherImages/pc-loading.svg";
import './style.css';
import { useNavigate } from "react-router-dom";

function Loading() {
  const percentBar = useRef<any>(null);
  const [percentage, setPercentage] = useState(0);
  const navigate = useNavigate()

  function runPercentageAndredirector() {
    const timer = setInterval(() => {
      setPercentage((percentBar.current.offsetWidth * 100) / 267.28);

      console.log(percentBar.current.offsetWidth);
      if (percentBar.current.offsetWidth >= "267") {
        clearInterval(timer)
        navigate("/home")
      }
    }, 120);

  }

  useEffect(() => {
    runPercentageAndredirector();
  })


  return (
    <div className='container-loading'>
      <div className='figure-box'>
        <img className="shake-vertical" src={pcFigure} alt="pc-loading" />
        <div className='container-loading-bar'>
          <p >{percentage.toFixed(0)}%</p>
          <div ref={percentBar} className="progress-bar load">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading;
