import { useEffect, useState, useTransition } from "react";
import p from "../../utility/p";

function A({children}){
    p('A')
    
    return children
}

function B(){
    p('B')
    
    return <C/>
}

function C(){
    p('C')
    
    return null
}

function D(){
    p('D')
    
    return null
}

// function Appy(){
//     //const [count,setCount] = useState(0)
//     //const [state,setState] = useState(0)
//     // useEffect(()=>{
//     //     //setState(state => state + 1)
//     //     p("1")
//     //     return ()=> {
//     //         p("2")
//     //     }
//     // },[])
//     //p('Appy')
//     const [startTransition, isPending] = useTransition();
// 5   const [inputValue, setInputValue] = useState('');
// 6    
// 7      const handleInputChange = (event) => {
// 8        startTransition(() => {
// 9          setInputValue(event.target.value);
// 10        });
// 11      };
// 12    
// 13      return (
// 14        <div className="App">
// 15          <input
// 16            type="text"
// 17            value={inputValue}
// 18            onChange={handleInputChange}
// 19            placeholder="Type here..."
// 20          />
// 21          {isPending && <p>Loading...</p>}
// 22        </div>
// 23      );
// 24    }
    
    
    // return (
    //     <div>
    //         App Component 
    //         {/* <p>count : {count}</p> */}
    //         <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Type Here..."/>
    //         {/* <button onClick={handleClick}>Check Transition</button> */}
    //         {isPending ? <p>Updating...</p> : <p>Now updated ....</p>}
    //     </div>
        
    // )
// }

function Appy() {
const [startTransition, isPending] = useTransition();
const [inputValue, setInputValue] = useState('');    
  const handleInputChange = (event) => {
 startTransition(() => {
 setInputValue(event.target.value);
   });
 };

 return (
 <div className="App">
 <input
 type="text"
 value={inputValue}
 onChange={handleInputChange}
 placeholder="Type here..."
/>
    {isPending && <p>Loading...</p>}
  </div>
);
 }

export default Appy;

