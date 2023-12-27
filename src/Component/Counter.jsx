import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResetCounter, decrementCounter, incrementCounter } from '../Redux/Action';

const Counter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();

    const handleIncrement = () =>{
        dispatch(incrementCounter())
    }
    const handleDecrement = () =>{
        dispatch(decrementCounter())
    }
    const handleReset = () =>{
        dispatch(ResetCounter())
    }
    return (
        <div style={{textAlign:'center', marginLeft:'600px'}}>
            <h4>Counter APP</h4>
            <p>Count: {count}</p>
            <div style={{display:'flex'}}>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};
export default Counter;