import { useState } from "react";
import p from "../../utility/p";

function useToggleComponentHook(paramValue){
    const [value,setValue] = useState(paramValue);
    
    function handleToggling(){
        setValue(!value)
    }
  
    return {value : value ,toggleMe : handleToggling};// it will go out with the key .
}

export default useToggleComponentHook;