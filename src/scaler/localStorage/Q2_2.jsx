import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

export const useLocalStorage = (key, initialValue) => {
    //let storedData = initialValue;
     const [storageState,setStorageState] = useState(initialValue);

    const handleUpdateStorageData =(updatedValue)=>{
        //
        localStorage.setItem(key,JSON.stringify(updatedValue));
         setStorageState(updatedValue);
    }
    useEffect(()=>{
        let storedData = JSON.parse(localStorage.getItem(key));
        if(!storedData){
            storedData =initialValue
            localStorage.setItem(key,JSON.stringify(storedData))
        }
         setStorageState(storedData)
    },[])


    return {value : storageState,setValue : handleUpdateStorageData};
  };
  
  const Q2_2 = () => {
    const {q2_2} = useParams();

    const { value, setValue } = useLocalStorage("inputValue", "GO");
    //const [stateValue,setStateValue] = useState("");
  
    const handleChange = (e) => {
    setValue(e.target.value);
    // setStateValue(e.target.value)
    // localStorage.setItem("inputValue",JSON.stringify(e.target.value))
    };
    // const {key,initialValue} = {key: "inputValue",initialValue : "GO"}

    // useEffect(()=>{
    //     let storedData = JSON.parse(localStorage.getItem("inputValue"));
    //     if(!storedData){
    //         storedData =""
    //         localStorage.setItem("inputValue",JSON.stringify(storedData))
    //     }
    //     setStateValue(storedData)
    // },[])
  
    return (
      <div>
        <h1>Dynamic Routing with Local Storage : {q2_2}</h1>
        <input type="text" value={value} onChange={handleChange} />
      </div>
    );
  };
  
  export default Q2_2;
  