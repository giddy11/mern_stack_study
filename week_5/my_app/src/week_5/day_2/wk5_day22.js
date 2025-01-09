import React from 'react'
// import * as JSFile from '../day_2/functions';
import { mainOne, mainTwo } from '../day_2/functions';
import Header from '../../components/header';
import Custom_button from './custom_button';
import React_base_func from './react_base_func';
import Component_two from './component_two';


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

    let content1 = "ydfgfygdufydfygdfdgfdhgfgdygfydgfyud"
    let content2 = "ydfgfygdufydfygdfdgfdhgfgdygfydgfyud"
    let content3 = "ydfgfygdufydfygdfdgfdhgfgdygfydgfyud"
  return (
    <div>
        <Header/>
        <Custom_button cusClass="classone" content={content1} showNavigation={false}/>
        <Custom_button cusClass="classtwo" content={content2} showNavigation={true}/>
        <Custom_button cusClass="classthree" content={content3} showNavigation={false}/>

        <React_base_func cusClass="classtwo" content="This is react base" showMe="hello"/>

        {/* 
            TODO: ASSIGNMENT - 1
            Convert the following into a react component
        */}

        <Component_two counter= "One" digit= "1"></Component_two>
        <Component_two counter= "Two" digit= "2"></Component_two>

    </div>
  )
}
