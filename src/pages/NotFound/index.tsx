import robotProto4 from "../../assets/robots/robot-cute-proto-4.svg";
import robotProto5 from "../../assets/robots/robot-cute-proto-5.svg";
import './style.css';

function NotFound() {
  return (
    <div className='container-not-found'>
      <div className='content-not-found-box'>
        <img src={robotProto5} alt="robot-cute-proto-5" />
        <div className='not-found-box'>
          <h1>404 - NOT FOUND</h1>
        </div>
        <img src={robotProto4} alt="robot-cute-proto-4" />
      </div>
    </div>
  )
}

export default NotFound;
