import { Route, Routes } from "react-router-dom"
import NavbarComponent from "./components/navbar/Navbar"
import HomePage from "./pages/home/Home"
import WatchlistPage from "./pages/watchlist/Watchlist"
import Grandparent from "./context/example/ContextExample"
import AttributesContext from "./context/example/ContextExample"
import CounterWithReduxComponent from "./redux/component/CounterWithRedux"
import {Provider} from 'react-redux';
import { reduxStore } from "./redux/store/store"
import EnterTextComponent from "./redux/component/EnterText"
import AdaptableCounterComponent from "./redux/component/AdaptableCounter"
import MovieContextProvider, { movieContext } from "./context/example/MovieContext"
import { useContext, useState } from "react"
import ToDoListComponent from "./redux/component/TodoList"
import User from "./redux/component/User"
import BlogPage from "./pages/blogPage/blog"
import AtomicHabitsHomePage from "./pages/atomicHabits/AtomicHabits"
import ListPage from "./fms/pages/ListPage"
import NotFound404Page from "./fms/pages/NotFound404"

function App() {
  // const [pageNo,setPageNo] = useState(7);
  const designAtomicHabits = false;
  const designBlogPage = false;
  const fmsKunalV1 = false;
  const scalerMovieApp = true;

  if (fmsKunalV1){
    return(
      <Routes>
        <Route path="/" element={<ListPage/>}/>
        <Route path="*" element={<NotFound404Page/>}/>
      </Routes>
    )
  }
  if (designBlogPage){
    return (
      <BlogPage/>
    )
  }
  if (designAtomicHabits){
    return (
      <div>
        <AtomicHabitsHomePage/>
        {/* <Routes>
            <Route path="/" element={<AdaptableCounterComponent/>}/>
            <Route path="/blog" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/watchlist" element={<WatchlistPage/>}/>
            <Route path="/todo" element={<ToDoListComponent/>}/>
            <Route path="/user" element={<User/>}/>
          </Routes> */}
      </div>
    
  )
  }

  if(scalerMovieApp){
    return (
      <Provider store={reduxStore}>
        <div className="flex flex-col justify-center items-center">
          
          
          <NavbarComponent/>
        
          
         {/* <MovieContextProvider globalPageNo={pageNo}>
          <TestContext1/>
         </MovieContextProvider> */}
          
          <Routes>
            <Route path="/adaptablecounter" element={<AdaptableCounterComponent/>}/>
            {/* <Route path="/entertext" element={<EnterTextComponent/>}/> */}
            {/* <Route path="/counter" element={<CounterWithReduxComponent/>}/> */}
            {/* <Route path="/" element={<AttributesContext/>}/> */}
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/watchlist" element={<WatchlistPage/>}/>
            <Route path="/todo" element={<ToDoListComponent/>}/>
            <Route path="/user" element={<User/>}/>
          </Routes>
          </div>
        </Provider> 
  )

  }

  return (
    <div>
      I am just an APP. For different application please check the flags defined at the starting of the function.
    </div>
  )
  
}

export default App;

// function TestContext1(){
//   const contextValue = useContext(movieContext);
//   console.log(contextValue)
//   return (
//   <div>
//     Pagination Working or not :  {contextValue.prop1}
//     <p>Page No : {contextValue.propPageNo}</p>

//   </div>  
//   );
// }
