import React from "react";
import { useParams } from "react-router-dom";
import p from "../../utility/p";

const Q2_1 = () => {
    const {q} = useParams()
  // Edit this component
  /***
   * * Do not edit the data-testid attributes.
   * Use key inputValue to store the data in local storage.
   * */
   const [inputText,setInputText] = React.useState("");

   const handleInputTextChange =(e)=>{
    
    localStorage.setItem("inputTextStored",JSON.stringify(e.target.value))
    setInputText(e.target.value);
    //p("inside handle Change",inputText)
   }
   React.useEffect(()=>{
    let storedData = JSON.parse(localStorage.getItem("inputTextStored"))
    
    if (storedData == null){
        storedData="";
        localStorage.setItem("inputTextStored",JSON.stringify(storedData))
    }
    
    setInputText(storedData);
    //p(storedData)
    
   },[])
   //p("just outside useEffect",inputText)
  return (
    <div>
        <h1>Dynamic Routing : {q}</h1>
      <input data-testid="input-id" type="text" value={inputText} onChange={handleInputTextChange} />
    </div>
  );
};
export default Q2_1;
