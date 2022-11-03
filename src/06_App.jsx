import React, { useState } from 'react'

const App = () => {
    let newTime = new Date().toLocaleTimeString();
    const [ctime, settime] = useState(newTime);

    const Updatetime = () => {
        newTime = new Date().toLocaleTimeString();
        settime(newTime);
    }


    setInterval(Updatetime, 1000);
    return (
        <>
            <h1>{ctime} AM</h1>

        </>
    )
}


export default App