import React from 'react'
import { createContext } from 'react'
import App2 from './07_App2'

const FirstName = createContext();
const LastName = createContext();

const App1 = () => {
  return (
    <>
      <FirstName.Provider value={"Rohit"}>
        <LastName.Provider value={"Bhure"}>
          <App2 />
        </LastName.Provider>
      </FirstName.Provider>

    </>

  )
}

export default App1;
export { FirstName, LastName }