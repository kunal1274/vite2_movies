import { Route, Routes } from "react-router-dom"
import NavbarComponent from "./components/navbar/Navbar"
import HomePage from "./pages/home/Home"
import WatchlistPage from "./pages/watchlist/Watchlist"

function App() {
  

  return (
    <>
    <div className="ml-40">
      
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/watchlist" element={<WatchlistPage/>}/>
      </Routes>

    </div>
    
    </>
  )
}

export default App
