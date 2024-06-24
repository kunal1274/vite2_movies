import { useDispatch, useSelector } from "react-redux";
import { dynamicDecrement, dynamicIncrement, dynamicReset } from "../slice/DynamicCounterSlice";

function AdaptableCounterComponent(){
    
    const dynamicCountFromStore = useSelector((allStates)=>{
        return allStates.dynamicCounterFromStore
    })
    //console.log("using Selector" , dynamicCountFromStore);
    const count = dynamicCountFromStore.value;
    const doTheActionDispatchFromComponent = useDispatch();

    const handleIncrement = () => {
        console.log("Inc")
        doTheActionDispatchFromComponent(dynamicIncrement());
    }

    const handleDecrement = () => {
        console.log("Dec")
        doTheActionDispatchFromComponent(dynamicDecrement())
    }

    const handleReset = () => {
        console.log("Reset")
        doTheActionDispatchFromComponent(dynamicReset())
    }
    return(
        <div className="ml-5">
            Adaptable Counter
            <p>{count}</p>
            
            <button className="h-15 w-30 my-2 mr-2 p-2 border border-2 border-solid border-green-400 text-center" onClick={handleIncrement}>Increment</button>
           
            {count === 0
                ?
                <>
                 <button className="h-15 w-30 text-center box-border my-2 mr-2 p-2 border border-2 border-solid border-gray-400 bg-gray-100" onClick={handleDecrement} disabled>Decrement</button>
                 <button className="h-15 w-30 text-center box-border my-2 mr-2 p-2 border border-2 border-solid border-gray-400 bg-gray-100" onClick={handleReset} disabled={true}>Reset</button>
                </>
               
                :
                <>
                 <button className="h-15 w-30 text-center box-border my-2 mr-2 p-2 border border-2 border-solid border-red-400" onClick={handleDecrement}>Decrement</button>
                <button className="h-15 w-30 text-center box-border my-2 mr-2 p-2 border border-2 border-solid border-yellow-600" onClick={handleReset} disabled={false}>Reset</button>
                </>
               
            }
            {/* <button className="h-15 w-30 text-center box-border my-2 mr-2 p-2 border border-2 border-solid border-red-400" onClick={handleDecrement}>Decrement</button> */}
            
        </div>
    );
}
export default AdaptableCounterComponent;