import React from 'react';
import ButtonPropertyComp from '../components/buttonPropertyComp';

const MappingComponent = () => {
    let array_object=[
        {
            name:"Gideon Edoghotu",
            rank: "Fullstack Web Dev",
            others:{
                sn:1,
                name:"ooo"
            }
        },
        {
            name:"Josephat Nzeata",
            rank: "Senior Dev"
        },
        {
            name:"Barikpe",
            rank: "Fullstack Mobile Dev"
        },
        {
            name:"Joy Chidinma",
            rank: "Product Manager"
        }
    ]
    // array_object[0].others.name
    const broadCast=(name)=>{
        alert(`Hello ${name}`)
    }

    return (
        <div>
            {array_object.map(array=>{
                return (
                    <div>
                        <h1>{array.name}</h1>
                        <p>{array.rank}</p>
                    </div>
                )
            })}
            {array_object.map(array=>{
                return (
                    <ButtonPropertyComp header={array.name} subcontent={array.rank}funcHandler={()=>broadCast(array.name)}/>
                )
            })}

        </div>
    );
}

export default MappingComponent;

// Components
// Types Of Components - rfc, rcc
// Props 
// Actions
// Mapping - Array of Object