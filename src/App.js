import './App.css';
import 'animate.css'
import './Cursor.css'
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
