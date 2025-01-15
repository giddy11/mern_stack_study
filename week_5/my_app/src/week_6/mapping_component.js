import React from 'react'
import img from '../assets/keyb.jpg';


export default function Mapping_component() {

    let listOfStudents = [
        {
            name:"Emmanuel O",
            department: "Petroleum",
            faculty: "Engineering",
            profilePicture: "https://bootstrapmade.com/content/demo/Arsha/assets/img/team/team-2.jpg"
        },
        {
            name:"Gideon E",
            department: "Chemical",
            faculty: "Engineering",
            profilePicture: "https://bootstrapmade.com/content/demo/Arsha/assets/img/team/team-2.jpg"
        },
        {
            name:"Ifeanyi N",
            department: "Mechanical",
            faculty: "Engineering",
            profilePicture: "https://bootstrapmade.com/content/demo/Arsha/assets/img/team/team-2.jpg"
        },
    ]
  return (
    <div style={{color:"red", display: "flex"}}>
        {listOfStudents.map(arr => {
            return (
                <div>
            <h1>{arr.name}</h1>
            <p>{arr.department}</p>
            <i>{arr.faculty}</i>
            {/* <img src={img}/> */}
            <img src={require("../assets/keyb.jpg")}/>
        </div>
            )
        })}

        
    </div>
  )
}
