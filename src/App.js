import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { neonCursor } from 'threejs-toys'
import 'animate.css'
import SafaAsgar_Resume from './assets/SafaAsgar_Resume.pdf';
import './Cursor.css'

function App() {
  neonCursor({
    el: document.getElementById('app'),
    shaderPoints: 16,
    curvePoints: 80,
    curveLerp: 0.5,
    radius1: 5,
    radius2: 20,
    velocityTreshold: 10,
    sleepRadiusX: 250,
    sleepRadiusY: 150,
    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.0025
  })
  return (
    <div className="App px-12 pt-5">
      <Navbar></Navbar>
      <div className='h-96 flex flex-col justify-center align-middle pt-72'>
        <div className='animate__animated animate__fadeInDown'>
          <h1 className='text-5xl font-black'>HELLO!</h1>
          <p className='text-7xl font-black text-red-600'>I AM SAFA ASGAR</p>
        </div>
        <a
          href={SafaAsgar_Resume}
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-outline mt-5 w-56 mx-auto'
        ><button>Download Resume</button></a>
      </div>
    </div>
  );
}

export default App;
