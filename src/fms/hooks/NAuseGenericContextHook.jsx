import React, { useContext } from "react";
import p from "../../utility/p";

function createContextWithName(givenContextName){
    return React.createContext();
}

function withContextTheConsumerComponent(ConsumerComponent,contextObject){
    return function ContextWrapperForConsumerComponent(props){
        const consumedValue = useContext(contextObject);
        p("inside consumer",consumedValue)

        return <ConsumerComponent {...props} consumedProp={consumedValue}/>
    }
}
function useGenericContextHook(givenContextName,paramProps,GivenWrappedComponentName,GivenConsumerComponentName){

    const ContextMain = createContextWithName(givenContextName);
    p(ContextMain)

    function GenericContextProvider({children,...props}){
        p("inside Generic Context Provider ",{...props})
        return(
            <ContextMain.Provider value={{...props}}>
                {children}
            </ContextMain.Provider>
        )
    }
    function WrappingTheComponent(){
        return(
            <GenericContextProvider price={100} >
                <GivenWrappedComponentName/>
            </GenericContextProvider>
        )
    }

    // const GivenConsumerComponentWithProps = withContextTheConsumerComponent(GivenConsumerComponentName,ContextMain);
    
   WrappingTheComponent()
    // return {WrappingTheComponent,GivenConsumerComponentWithProps} 
    return {WrappingTheComponent,ContextMain}
    
}




function FreightParent(){
    return(<div>
        I am Freight Parent.
        ⬇️
        <FreightChild/>
    </div>)
}

function FreightChild(){
    return(
        <div>
            I am a Freight Child
            ⬇️
            <FreightGrandChild/>
        </div>
    )
}

function FreightGrandChild({consumedValueProp}){
    const { ContextMain, WrappedComponent } = MainFunction({ FreightContext: "FreightAllContext" });
    const contextValue = useContext(ContextMain)
    return(
        <div>
            I am a Freight Grand Child
            😍😍
            <p>Consumed :{contextValue.qty} </p>x
        </div>
    )
}


// const {WrappingTheComponent,ContextMain} = useGenericContextHook("FreightContext","1000 US Dollars",FreightParent,FreightGrandChild)
// p(ContextMain)
// const GivenConsumerComponentWithPropsMe = withContextTheConsumerComponent(FreightGrandChild,ContextMain);


// const context1 = React.createContext()
// const context2 = React.createContext()



// function GenericContextProvider({children,prop1,...props}){
    
//     return(
//     <context1.Provider value={{"key1":"value1","key2":"value2",prop1,...props}}>
//         {children}
       
//     </context1.Provider>
//     );
// }

// function WrappedComponent(){
//     return(
//         <div>
//             This is the component which has been wrapped at level 0 ( initial Level )
//             which will call the component which is inside this as children - 
//             <ConsumerComponent/>
//             <div>The below is higher order function testing </div>
//             <ConsumedComponentWithProps/>
//         </div>
//     )
// }

// function ConsumerComponent(){
//     const consumedValue = useContext(context1)
//     // p(`<`+`${consumedValue.prop1}`+`/>`)
//     // p(consumedValue.prop1);
//     return(
//         <div>
//             The component which is about to consume the context
//             <p>Consumed Value : {consumedValue.prop1}</p>
//             <p>Consumed Value : {consumedValue.prop2}</p>
//             <p>Consumed Value : {consumedValue.prop3}</p>
//             <p>Consumed Value : {consumedValue.key2}</p>
//         </div>
//     )
// }

// function ConsumerComponent1({consumedValueProp}){
//     // const consumedValue = useContext(context1)
//     // p(`<`+`${consumedValue.prop1}`+`/>`)
//     // p(consumedValue.prop1);
//     return(
//         <div>
//             The component which is about to consume the context .. This is wrapped in higher order function.
//             <p>Consumed Value : {consumedValueProp.prop1}</p>
//             <p>Consumed Value : {consumedValueProp.prop2}</p>
//             <p>Consumed Value : {consumedValueProp.prop3}</p>
//             <p>Consumed Value : {consumedValueProp.key2}</p>
//         </div>
//     )
// }

function withContext(GivenConsumerComponent,contextObjectName){
    
    return function ContextWrapper(props){
        const consumedValue = useContext(contextObjectName)

    return <GivenConsumerComponent {...props} consumedValueProp={consumedValue}/>

    }
    
}

// const ConsumedComponentWithProps = withContext(ConsumerComponent1,context1)

// export {GenericContextProvider,WrappedComponent,ConsumerComponent}
// export {WrappingTheComponent};

function MainFunction({FreightContext}){

    const ContextMain = createContextWithName(FreightContext);
    function GenericContextProvider1({children}){
        return (
            <ContextMain.Provider value={{"qty":100}}>
                {children}
            </ContextMain.Provider>
        )

    }

    const WrappedComponent = (
        <GenericContextProvider1>
            <FreightParent />
        </GenericContextProvider1>
    );

    return { ContextMain, WrappedComponent };
}

// const ConsumedComponentWithProps = withContext(FreightGrandChild,context1)

function ContextHookTesting1(){
    const { ContextMain, WrappedComponent } = MainFunction({ FreightContext: "FreightAllContext" });
    //const ConsumedComponentWithProps = withContext(FreightGrandChild,ContextMain)
    
    return(
        <div>
            Context Hook Testing withing the same file 
            {WrappedComponent}
        </div>
    )
}

export default ContextHookTesting1;