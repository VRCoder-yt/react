import React, { useContext } from 'react'
import { FirstName, LastName } from './07_App1'

// const App3 = () => {
//     return (
//         <>
//             <FirstName.Consumer>
//                 {(fname) => {
//                     return (<LastName.Consumer>
//                         {(lname) => {
//                             return (
//                                 <h1>My name is {fname} {lname}</h1>
//                                 )
//                         }}
//                     </LastName.Consumer>
//                     )
//                 }}
//             </FirstName.Consumer>
//         </>
//     )
// }

// export default App3;


// Using UseContext method it easy to use and 
const App3 = () => {
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    return (
        <h1>My name is {fname} {lname}</h1>
    )
}

export default App3;