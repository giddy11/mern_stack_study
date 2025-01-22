// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Wk5_day21 from './week_5/day_2/wk5_day21';
// import Wk5_day22 from './week_5/day_2/wk5_day22';
// import Wk5_day23 from './week_5/day_3/wk5_day23';
// import Wk6_1 from './week_6/wk6_1';
// import MappingComponent from './week_6/mapping_component';
// import Forms_main01 from './week_6/forms_main01';
// import Forms_main02 from './week_6/forms_main02';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <Wk5_day21/> */}
//     {/* <Wk5_day22/> */}
//     {/* <Wk5_day23/> */}
//     {/* <Wk6_1/> */}
//     {/* <MappingComponent/> */}
//     {/* <Forms_main01/> */}
//     <Forms_main02/>
//   </React.StrictMode>
// );

// ALl about Router
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Forms_main02 from "./week_6/forms_main02";
import Forms_main01 from "./week_6/forms_main01";
import Header from "./components/header";
import Page_1 from "./week_6/router_concepts/page_1";
import Page_2 from "./week_6/router_concepts/page_2";
import Route_param from "./week_6/router_concepts/route_param";
import Homepage1 from "./week_7/homepage1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forms_main01></Forms_main01>}></Route>
          <Route path="/form2" element={<Forms_main02></Forms_main02>}></Route>
          <Route path="/page1" element={<Page_1></Page_1>}></Route>
          <Route path="/page2" element={<Page_2></Page_2>}></Route>
          <Route path="/param/:message" element={<Route_param></Route_param>}></Route>
          <Route path="/home1/:profile_name" element={<Homepage1></Homepage1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

/**
 * Path of route - localhost:3000 or localhost:3000/
 *
 * Navigation - moving from one page to another.
 *  You need the path of the page in order to navigate
 *
 * The Domain - Base URL
 * In react js u only define the routes and dont bother about the base url
 *
 * Defining a route: home - /home
 * signup - /signup
 * login - /login etc
 *
 * React router ha s3 main properties or functions
 * The BrowseRouter is the platform
 * The Routes rep all the pages
 * The Route represent just one page
 *
 * Route - Two Key Attribute (path & element)
 */
