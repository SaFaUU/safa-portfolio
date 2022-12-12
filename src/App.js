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
import Typewriter from 'typewriter-effect';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
  // neonCursor({
  //   el: document.getElementById('app'),
  //   shaderPoints: 16,
  //   curvePoints: 80,
  //   curveLerp: 0.5,
  //   radius1: 5,
  //   radius2: 20,
  //   velocityTreshold: 10,
  //   sleepRadiusX: 250,
  //   sleepRadiusY: 150,
  //   sleepTimeCoefX: 0.0025,
  //   sleepTimeCoefY: 0.0025
  // })
  return (
    <div className="App pt-5">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
