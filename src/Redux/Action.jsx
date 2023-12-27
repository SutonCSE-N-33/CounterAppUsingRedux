import { Decrement, Increment, Reset } from "./ActionType"

export const incrementCounter = () =>{
    return {
        type: Increment,
    }
}

export const decrementCounter = () =>{
    return{
        type: Decrement,
    }
}

export const ResetCounter = () =>{
    return{
        type: Reset,
    }
}