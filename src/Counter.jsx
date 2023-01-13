import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const incrementCount = (e) => {
        e.preventDefault()
        setCount(prev => prev+1)
    }

    const decrementCount = (e) => {
        e.preventDefault()
        setCount(prev => prev-1)
    }

    return(
        <>
        <style jsx>
            {`
            .btn{
                padding: 20px;
                border: 0;
            }
            `}
        </style>
            count is : {count} <br />
            <button className="btn" style={{background:"green", color:"white"}} onClick={incrementCount}>Increement</button>&nbsp;  
            <button className="btn" onClick={decrementCount}>Decrement</button>      
        </>
    )
}

export default Counter