import React, { createContext, useState } from 'react'
import ComponentB from './componentB'

//solving the issue of prop drilling
export const UserContext = createContext();

//usecontext
export default function ComponentA() {
    const [user, setUser] = useState("giddy11");
  return (
    <div className='box'>
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
            <ComponentB/>
        </UserContext.Provider>
    </div>
  )
}

// export default function ComponentA() {
//     const [user, setUser] = useState("giddy11");
//   return (
//     <div className='box'>
//         <h1>Component A</h1>
//         <h2>{`Hello ${user}`}</h2>
//         <ComponentB user={user}/>
//     </div>
//   )
// }
