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

function App() {
  

  return (
   
    
    
      <Provider store={reduxStore}>
        <div className="flex flex-col justify-center items-center">
          
          
          <NavbarComponent/>
        
          
         
          
          <Routes>
            {/* <Route path="/adaptablecounter" element={<AdaptableCounterComponent/>}/> */}
            {/* <Route path="/entertext" element={<EnterTextComponent/>}/> */}
            {/* <Route path="/counter" element={<CounterWithReduxComponent/>}/> */}
            {/* <Route path="/" element={<AttributesContext/>}/> */}
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/watchlist" element={<WatchlistPage/>}/>
          </Routes>

          
          
          </div>
        </Provider>

      
    
    
    
   
  )
}

export default App
