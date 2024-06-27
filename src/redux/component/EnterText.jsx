import { useState } from "react"

function EnterTextComponent(){
    const [text,setText] = useState("Hippopotamus")
    // useState
    // let writtenString = "Hippopotamus";

    const handleTextChange = (e) =>{
    //    return writtenString = e.target.value;
    setText(e.target.value)
    }

    const handleUpperCase =()=>{
    //    return writtenString[0].toUpperCase();
    const changedText = text[0].toUpperCase();
    setText(changedText)
    }

    const handleLowerCase =() =>{
    //    return writtenString[0].toLowerCase();
    const changedText = text[0].toLowerCase();
    setText(changedText)
    }

    return(
        <div>
            <h1>Changing the Case of given Written String</h1>
            <p className="m-5">{text}</p>
            <input className="border border-black border-solid" type="text" onChange={handleTextChange} placeholder="Enter your Name"/>
            <button className="m-4 border border-purple-500 border-2 p-3" onClick={handleUpperCase}>UpperCase</button>
            <button className="border border-2 border-gray-500 p-3" onClick={handleLowerCase}>LowerCase</button>
        </div>
    );
}

export default EnterTextComponent;