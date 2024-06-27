import React, { useContext } from "react";

const attributesContextWrapper = React.createContext();

function AttributesContext(){
    return(
    <attributesContextWrapper.Provider value={"checking"}>
        <Grandparent>
            <NewParent/>
        </Grandparent>
    </attributesContextWrapper.Provider>
    );
}

function Grandparent({children}){
    const msg = "Be Safe";

    return <div>
        I am Grandparent
        <p>After this line Children are printed.</p>
        {children}
        <p>Before this line Children are printed.</p>
        <div>&#8595;</div>
        <Parent message={msg}/>
    </div>
}

function NewParent(){
    return <div>
        I am New Parent coming out from GrandParent.
        <Child></Child>
    </div>
}

function Parent({message}){
    return <div>
        I am Parent
        <div>&#8595;</div>
        <Child message={message}/>
    </div>
}

function Child({message}){
    return <div>
        I am Child
        <div>&#8595;</div>
        <GrandChild message={message}/>
    </div>
}

function GrandChild({message}){
    const usingAttributesContextValue = useContext(attributesContextWrapper);
    return <div>
        I am Grandchild
        <p><i>{usingAttributesContextValue}</i></p>
        <div>&#8595;</div>
        <GreatGrandChild message={message}/>
    </div>
}

function GreatGrandChild({message}){
    return <div>
        I am GreatGrandChild
        <p><b>{message}</b></p>
        
    </div>
}

export default AttributesContext;