import React from 'react'; 
// All React tools to help develop a React based application
import ReactDOM from 'react-dom/client'; 
// The tools needed to interact between reactjs and native web dev (HTML, CSS & JS)
import './index.css';
import * as JSFile from './test/test_1';
import { mainOne, mainTwo } from './test/test_1';

mainOne()
mainTwo()
JSFile.mainThree()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  </React.StrictMode>
);
