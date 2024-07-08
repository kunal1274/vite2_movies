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
import MovieWatchList from "./components/movie/WatchList"
import SidebarComponent from "./fms/components/SidebarComponent"
import HookNetworkAsyncFetch from "./fms/pages/HooksPage"
// import ContextHookTesting1 from "./fms/hooks/useGenericContextHook"
import HookNetworkAsyncAxios from "./fms/pages/HooksPage"
import DashboardPage from "./fms/pages/DashboardPage"
import FanList from "./fms/pages/FanList"
import Q2_1 from "./scaler/localStorage/Q2_1"
import Q2_2 from "./scaler/localStorage/Q2_2"
import Q2_3 from "./scaler/localStorage/Q2_3/Q2_3"
import DashboardPageV1 from "./fms/pages/DashboardPageV1"
import Appy from "./scaler/contest/Q2"
// import Q1 from "./scaler/localStorage/Q1"



function App() {
  // const [pageNo,setPageNo] = useState(7);
  const designAtomicHabits = false;
  const designBlogPage = false;
  const fmsKunalV1 = true;
  const scalerMovieApp = false;

  if (fmsKunalV1){
    return(
      <Routes>
        <Route path="/cq2" element={<Appy/>}/>
        {/* <Route path="/scaler/:q2_3" element={<Q2_3/>}/>
        <Route path="/scaler/:q2_2" element={<Q2_2/>}/>
        <Route path="/scaler/:q2_1" element={<Q2_1/>}/>
        <Route path="/fan" element={<FanList/>}/> */}
        <Route path="/dashboard" element={<DashboardPageV1/>}/>
        <Route path="/axios" element={<HookNetworkAsyncAxios/>}/>
        {/* <Route path="/contexthook" element={<ContextHookTesting1/>}/> */}
        <Route path="/hookspage" element={<HookNetworkAsyncFetch/>}/>
        <Route path="/sidebar" element={<SidebarComponent/>}/>
        <Route path="/list" element={<ListPage/>}/>
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
            <Route path="/watchlist" element={<MovieWatchList/>}/>
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
