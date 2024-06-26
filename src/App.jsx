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

function App() {
  // const [pageNo,setPageNo] = useState(7);
  const designTesting = false;

  if(designTesting){
    return(
      <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:"10px",
        border:"solid red 2px",
        padding:"20px",
      }}>
        <div
          style={{
            textAlign:"center",
            fontSize:"20px",
            fontWeight:600,
          }}
        >TMDB API Movies Listing</div>
        <div style={{
          display:"grid",
          
          gridColumn:1,
          marginLeft:"20vw",
          marginRight:"20vw",
          marginTop:"2vh",
          marginBottom:"2vh",
          padding:"10px",
          border:"solid blue 1px"
        }}>
          <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"flex-start",
            alignItems:"center"
          }}>
            <div style={{
              margin:"5px"
            }}>
              <img src="https://images.unsplash.com/photo-1718202248507-9b6a498bcec2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D" alt="logo_test" style={{
                height:"24px",
                width:"24px",
                padding:"2px",
                borderRadius:"16px",
              }}/>
            </div>
            <div style={{
              padding:"5px",
              fontFamily:"fantasy",
              fontWeight:700,
            }}>
              Home
            </div>
          <div style={{
              padding:"5px",
              fontFamily:"fantasy",
              fontWeight:600,
            }}>
              Movies
            </div>
            <div style={{
                padding:"5px",
                fontFamily:"fantasy",
                fontWeight:600,
            }}>
              Watchlist
            </div>

          </div>
         
          <div
          style={{
            width:"60vw",
            height:"50vh",
            backgroundImage:"url(https://images.unsplash.com/photo-1719179512969-84e9863abbf2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D)",
            backgroundSize:"cover",
             backgroundPosition:"center",
            backgroundRepeat:"no-repeat"
          }}
          ></div>
           <div style={{
            textAlign:"center"
           }}>Trending Movies</div>
           <div style={{
            display:"grid",
            gridTemplateColumns :'repeat(4,1fr)',// '1fr 1fr 1fr 1fr',// 'repeat(4,1fr)'
            rowGap : "30px",
            columnGap:"5px",
            border:"solid yellow 3px",
            padding:"10px",
            // margin:"5px"
           }}>
            
            <div style={{
              height:"30vh",
              width:"13vw",
              borderRadius:"10px",
              border:"dashed green 1px",
              backgroundImage : "url(https://images.unsplash.com/photo-1718653505304-7a4ab69748c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundPosition : "center",
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat"

            }}>
            </div>
            <div style={{
              height:"30vh",
              width:"13vw",
              // padding:"5px",
              // margin:"4px",
              border:"dashed green 1px",
              backgroundImage : "url(https://plus.unsplash.com/premium_photo-1664391859117-39b8ac442b94?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D)",
              backgroundPosition : "center",
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat"

            }}>
            </div>
            <div style={{
              height:"30vh",
              width:"13vw",
              // padding:"5px",
              // margin:"4px",
              border:"dashed green 1px",
              backgroundImage : "url(https://plus.unsplash.com/premium_photo-1717604724699-724a4005c819?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D)",
              backgroundPosition : "center",
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat"

            }}>
            </div>
            <div style={{
              height:"30vh",
              width:"13vw",
              // padding:"5px",
              // margin:"4px",
              border:"dashed green 1px",
              backgroundImage : "url(https://images.unsplash.com/photo-1719150006653-491c822d76ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D)",
              backgroundPosition : "center",
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat"

            }}>
            </div>
            <div style={{
              height:"30vh",
              width:"13vw",
              // padding:"5px",
              // margin:"4px",
              border:"dashed green 1px",
              backgroundImage : "url(https://images.unsplash.com/photo-1719176372654-352eaa75f065?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D)",
              backgroundPosition : "center",
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat"

            }}>
            </div>
            <div style={{
              height:"30vh",
              width:"13vw",
              // padding:"5px",
              // margin:"4px",
              border:"dashed green 1px",
              backgroundImage : "url(https://images.unsplash.com/photo-1718965107564-daa12e777876?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8)",
              backgroundPosition : "center",
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat"

            }}>
            </div>
            <div style={{
              height:"30vh",
              width:"13vw",
              // padding:"5px",
              // margin:"4px",
              border:"dashed green 1px",
              backgroundImage : "url(https://images.unsplash.com/photo-1718964313551-420f92249238?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8)",
              backgroundPosition : "center",
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat"

            }}>
            </div>
            <div style={{
              height:"30vh",
              width:"13vw",
              // padding:"5px",
              // margin:"4px",
              border:"dashed green 1px",
              backgroundImage : "url(https://images.unsplash.com/photo-1718653505304-7a4ab69748c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundPosition : "center",
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat"

            }}>
            </div>
            <div style={{
              height:"30vh",
              width:"13vw",
              // padding:"5px",
              // margin:"4px",
              border:"dashed green 1px",
              backgroundImage : "url(https://images.unsplash.com/photo-1718613205605-d933afdd1f36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundPosition : "center",
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat"

            }}>
            </div>

            
           </div>
        </div>
      </div>
    )
  }

  return (
   
    
    
      <Provider store={reduxStore}>
        <div className="flex flex-col justify-center items-center">
          
          
          <NavbarComponent/>
        
          
         {/* <MovieContextProvider globalPageNo={pageNo}>
          <TestContext1/>
         </MovieContextProvider> */}
          
          <Routes>
            {/* <Route path="/adaptablecounter" element={<AdaptableCounterComponent/>}/> */}
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
