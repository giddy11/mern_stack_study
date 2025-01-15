import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wk5_day21 from './week_5/day_2/wk5_day21';
import Wk5_day22 from './week_5/day_2/wk5_day22';
import Wk5_day23 from './week_5/day_3/wk5_day23';
import Wk6_day01 from './week_6/wk6_day01';
import Mapping_component from './week_6/mapping_component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Wk5_day21/> */}
    {/* <Wk5_day22/> */}
    {/* <Wk5_day23/> */}
    {/* <Wk6_day01/> */}
    <Mapping_component/>
  </React.StrictMode>
);
