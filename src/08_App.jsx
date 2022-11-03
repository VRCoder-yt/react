import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
    const [Num, setNum] = useState(0)
    const [Nums, setNums] = useState(0)

    // syntax
    // useEffect(() => {
    //     alert("i am clicked")
    // })

    // useEffect(() => {
    //     alert("i am clicked")
    // },[]) // using empty array this will work only one time when page refresh

    useEffect(() => {
        alert("i am clicked")
    }, [Num]) // passing num value so this will only work for first button

    return (
        <>
            <button onClick={() => {
                setNum(Num + 1);
            }}>
                Click my {Num}
            </button >
            <br></br>
            <button onClick={() => {
                setNums(Nums + 1);
            }}>
                Click my {Nums}
            </button >
        </>
    )
}

export default App;