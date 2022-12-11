import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { neonCursor } from 'threejs-toys'
import 'animate.css'
import SafaAsgar_Resume from './assets/SafaAsgar_Resume.pdf';
import safa from './assets/safa.jpg';
import './Cursor.css'
import Projects from './components/Projects/Projects';
import ContactForm from './components/ContactForm/ContactForm';

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
    <div className="App pt-5">
      <Navbar></Navbar>
      <div className='h-96 flex justify-between items-center pt-72 px-14'>
        <div className='flex flex-col items-start'>
          <div className='animate__animated animate__fadeInDown'>
            <h1 className='text-5xl font-bold  text-left'>HELLO!</h1>
            <p className='text-7xl font-black text-red-600'>I AM SAFA ASGAR</p>
          </div>
          <div>
            <a
              href={SafaAsgar_Resume}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-outline mt-5 w-44 glass mr-5'
            ><button>Download Resume</button></a>
            <button className='btn btn-outline mt-5 w-44 glass'>View More</button>
          </div>
        </div>
        <div>
          <img src={safa} alt="" className='rounded-full mr-16' />
        </div>
      </div>
      <div className='mt-56 mb-14'>
        <Projects></Projects>
      </div>
      <div>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}

export default App;
