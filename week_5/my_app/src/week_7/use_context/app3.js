import React, { createContext } from 'react'
import ComponentA from './componentA'

export default function App3() {
    return (
      <div>
          <ComponentA/>
      </div>
    )
  }

// export default function App3() {
//   return (
//     <div>
//         <ComponentA/>
//     </div>
//   )
// }

/**
 * useContext() = A react hook that allows you to share values between
 * multiple levels of components without passing props through each level
 * 
 * PROVIDER COMPONENT
 * 1. Import {createContext} from 'react'
 * 2. export const MyContext = createContext();
 * 3. <MyContext.Provider value={value}>
 *      <Child/>
 *    </MyContext.Provider>
 * 
 * CONSUMER COMPONENTS:
 * 1. import React, {useContext} from 'react'
 * 2. const value = useContext(MyContext);
 * 
 */