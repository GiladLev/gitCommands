import { useState } from 'react'
import './counter.css';

function Counter() {
    const [counter, setCounter] = useState(0)
    return (
        <div className="App">
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
    );
}
export default Counter
