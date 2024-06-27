import React,{useContext} from "react"

export const movieContext = React.createContext()

function MovieContextProvider({children,globalPageNo}){
    return (
    <movieContext.Provider value={{"prop1":"Pagination Checking", "propPageNo":globalPageNo}}>
        {children}
    </movieContext.Provider>
    );

}

export default MovieContextProvider;