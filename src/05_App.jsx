import React, { useState } from 'react'

const App = () => {
    let newTime = new Date().toLocaleTimeString();
    const [ctime, settime] = useState(newTime);

    const Updatetime = () => {
        newTime = new Date().toLocaleTimeString();
        settime(newTime);
    }

    return (
        <>
            <h1>{ctime}</h1>
            <button onClick={Updatetime}>Click Me</button>
        </>
    )
}


export default App