import React from 'react'
// import * as JSFile from '../day_2/functions';
import { mainOne, mainTwo } from '../day_2/functions';
import Header from '../../components/header';
import Custom_button from './custom_button';
import React_base_func from './react_base_func';
import Component_two from './component_two';
import Card from '../../components/card';
import Section_head from '../../components/section_head';



/**
 * Ways of importing file
 *  importing a module : import React from 'react'
 *  importing a css file: import './sty.css'
 *  when you want to access all functions
 * 
 * Why React
 * 1. Componentization (component based architecture)
 * 2. For routing / navigation
 * 3. State management
 * 
 * Types of components
 * 1.   Function based component (rfc) - When you have any js operations
 * 2.   React based component (rcc) - when u dont have js operations
 *  
 */

// JSFile.mainThree()
mainOne();
mainTwo()

export default function Wk5_day22() {
  let sarah = {name: "Sarah Jhonson", title: "Product Manager", text: "Aut maiores voluptates amet et quis praesentium qui senda para", pic:"https://bootstrapmade.com/content/demo/Arsha/assets/img/team/team-2.jpg"}

  let walter = {name: "Walter White", title: "Chief Executive Officer", text: "Explicabo voluptatem mollitia et repellat qui dolorum quasi", pic: "https://bootstrapmade.com/content/demo/Arsha/assets/img/team/team-1.jpg"}

  let william = {name: "William Anderson", title: "CTO", text: "Quisquam facilis cum velit laborum corrupti fuga rerum quia", pic: "https://bootstrapmade.com/content/demo/Arsha/assets/img/team/team-3.jpg"}

  let amanda = {name: "Amanda Jepson", title: "Accountant", text: "Dolorum tempora officiis odit laborum officiis et et accusamus", pic: "https://bootstrapmade.com/content/demo/Arsha/assets/img/team/team-4.jpg"}

  
  return (
    <div>
        <Header/>
        <Section_head/>
        <Card photo = {walter.pic} pname = {walter.name} title = {walter.title} ptext = {walter.text}  photo2 = {sarah.pic} pname2= {sarah.name} title2 = {sarah.title} ptext2 = {sarah.text}/>
        <Card photo = {william.pic} pname = {william.name} title = {william.title} ptext = {william.text}  photo2 = {amanda.pic} pname2= {amanda.name} title2 = {amanda.title} ptext2 = {amanda.text}/>
        
      
        

        {/* 
            TODO: ASSIGNMENT - 1
            Convert the following into a react component
        */}

        {/* <Component_two counter= "One" digit= "1"></Component_two>
        <Component_two counter= "Two" digit= "2"></Component_two> */}

    </div>
  )
}
