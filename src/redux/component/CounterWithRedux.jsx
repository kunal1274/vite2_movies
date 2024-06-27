import { useSelector,useDispatch } from "react-redux";
import { decrement, increment } from "../slice/CounterSlice";

function CounterWithReduxComponent(){
    const count = useSelector((allStates)=>{
       return allStates.counterFromStore.value
    })
    // console.log(count);
    const doTheDispatch = useDispatch();

    function onIncrement(){
        // console.log("Inc")
        doTheDispatch(increment());
    }

    function onDecrement(){
        // console.log("Dec")
        doTheDispatch(decrement());
    }
    return (
        <div>
            Counter with Redux
            <div className="mb-5 mt-5">Count : {count}</div>
            <button className="mr-10 border bg-green-600 p-2" onClick={onIncrement}>Increment</button>
            <button className="border bg-red-400 p-2" onClick={onDecrement}>Decrement</button>
            
        </div>
    );
}

export default CounterWithReduxComponent;