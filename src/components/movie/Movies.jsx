import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import PaginationComponent from "../pagination/Pagination";
import { movieContext } from "../../context/example/MovieContext";
import ModalComponent from "./Modal";
import SuccessAlertComponent, { WatchlistSuccessAlertComponent } from "./Alert";
const baseURL = 'https://api.themoviedb.org/3/trending/all/day';
const apiKey = '759a44a0504a2d2f81971272a953a08d';
const finalUrl = `${baseURL}?api_key=${apiKey}&language=en-US&page=1`
const finalWithoutPageNoUrl = `${baseURL}?api_key=${apiKey}&language=en-US`
const baseImageUrl = "https://image.tmdb.org/t/p/w500";
import p from "../../utility/p";
// import WatchlistPage from "../../pages/watchlist/Watchlist";


function Movies(){
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [isSuccess,setIsSuccess] = useState(false);
    const [localStorageState,setLocalStorageState] = useState({
        localStorageLength :localStorage.length,
        localStorageKeys : (() => {
            let ans = [];
            for(let i=0 ; i < localStorage.length ; i++){
                ans.push(localStorage.key(i))
            }
            return ans;
        })(),
        // watchListValues : JSON.parse(localStorage.getItem('watchList')) || [],
    });
    const [watchListState,setWatchListState] = useState([]); 
    const [isWatchlistSuccess,setIsWatchlistSuccess] = useState(false);
    
   

    const addToWL1= (newMovieElement) =>{
        const updatedMovieElements = [...localStorageState.watchListValues,newMovieElement]
        localStorage.setItem("watchList",JSON.stringify(updatedMovieElements))
        //localStorage.setItem("watchList",movieElement)
        console.log("Addition Clicked",newMovieElement)
        console.log("Before Addition to State",localStorageState)
        setLocalStorageState((prevState)=>(
            {
                ...prevState,
                localStorageLength : localStorage.length,
                localStorageKeys : (() => {
                    let ans = [];
                    for(let i=0 ; i < localStorage.length ; i++){
                        ans.push(localStorage.key(i))
                    }
                    return ans;
                })(),
                watchListValues : updatedMovieElements
            }
        ))
        console.log("After Addition to State",localStorageState)
        
        
        
    }

    const addToWL =(newMovieElement) =>{
        const updatedWatchListState = [...watchListState,newMovieElement];
        setWatchListState(updatedWatchListState)
        setIsWatchlistSuccess(true);
        // p(watchListState)
        localStorage.setItem("watchList",JSON.stringify(updatedWatchListState));
        setTimeout(() => {
            setIsWatchlistSuccess(false)
        }, 15000);
        // p(watchListState.length)
        
    }


    const removeFromWL= (removeMovieElement) =>{
        // console.log("Removal clicked",removeMovieElement)
        // p(movies)
        const updatedWatchListStateAfterRemoval = watchListState.filter((movie)=>(movie.id !== removeMovieElement.id))
        // p("updated after removal 2 > ",updatedWatchListStateAfterRemoval)
        setWatchListState(updatedWatchListStateAfterRemoval);
        localStorage.setItem("watchList",JSON.stringify(updatedWatchListStateAfterRemoval))
        // p(watchListState.length)
        
    }
   
    const handleSuccessAlert =() =>{
        setIsSuccess(true);
    }

    const handleCloseModal =()=>{
        setIsModalOpen(false)
    }
    const handleToggleModal =()=>{
        setIsModalOpen(!isModalOpen);
    }
    const handleYesInModal =() =>{
        // localStorage.clear()
        // const event = new Event('localStorageUpdate');
        // window.dispatchEvent(event);
        // (()=>{
        //     localStorage.clear();
        //     setWatchListState([])
        //     window.dispatchEvent(new Event('localStorageUpdate'));
        // })()
        localStorage.clear()
        setWatchListState([])
        setIsModalOpen(false)
        setIsSuccess(true)
        setTimeout(()=>{
            setIsSuccess(false);
        },3000)
    }
    // const [pageNumber,setPageNumber] = useState(1);
    const contextValue = useContext(movieContext);
    // console.log(contextValue)

   useEffect(()=>{
    // console.log(`Component rendered at: ${new Date().toLocaleString()}`);
    // const now = new Date();
    // const highResTime = performance.now(); // Get high-resolution time stamp

    // // Format the high-resolution time stamp to include microseconds
    // const formattedHighResTime = `${Math.floor(highResTime / 1000)}s ${Math.floor(highResTime % 1000)}ms ${Math.floor((highResTime % 1) * 1000)}μs`;

    // console.log(`Component use effect local storage  rendered at: ${new Date().toLocaleString()}`);
    //console.log(`Component FETCH rendered at: ${now.toLocaleString()} ${formattedHighResTime}`);

    const fetchMovies = async () => {
        try {
            // const response = await axios.get(`${baseURL}?api_key=${apiKey}&language=en-US&page=${pageNumber}`);
            const response = await axios.get(`${baseURL}?api_key=${apiKey}&language=en-US&page=${contextValue.propPageNo}`);
            // console.log(response.data.results);
            setMovies(response.data.results);
        } catch (error) {
            console.log(error);
            setError(error)
            
        }
        finally{
            setLoading(false)
        }

    }

    fetchMovies();
    let movieWatchListData = JSON.parse(localStorage.getItem('watchList'));
    if (movieWatchListData === null) {
        setWatchListState([])
    }
    else{
    setWatchListState(movieWatchListData)
    }
    

   },[contextValue.propPageNo,watchListState.length])

   /*
   useEffect(() => {
    // Event listener for custom localStorage updates
    // const now = new Date();
    // const highResTime = performance.now(); // Get high-resolution time stamp

    // // Format the high-resolution time stamp to include microseconds
    // const formattedHighResTime = `${Math.floor(highResTime / 1000)}s ${Math.floor(highResTime % 1000)}ms ${Math.floor((highResTime % 1) * 1000)}μs`;

    // // console.log(`Component use effect local storage  rendered at: ${new Date().toLocaleString()}`);
    // console.log(`Component LOCAL STORAGE rendered at: ${now.toLocaleString()} ${formattedHighResTime}`);
    const handleLocalStorageUpdate = () => {
        setLocalStorageState({
            localStorageLength: localStorage.length,
            localStorageKeys : (() => {
                let ans = [];
                for(let i=0 ; i < localStorage.length ; i++){
                    ans.push(localStorage.key(i))
                }
                return ans;
            })(),

            // Add more properties if needed
          });
    };
    // console.log(1,localStorageState.localStorageKeys)
    // Add event listener for custom event
    window.addEventListener('localStorageUpdate', handleLocalStorageUpdate);
    // handleLocalStorageUpdate();
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('localStorageUpdate', handleLocalStorageUpdate);
    };
  }, []);
  */

//    function handleOnNextClick(){
//     // console.log("Next")
//     setPageNumber(pageNumber+1)
//     }

//     function handleOnPrevClick(){
//         // console.log("Previous")
//         if(pageNumber ===1){
//             return;
//         }
//         setPageNumber(pageNumber-1);
//     }

    if (loading){
        return(
            <div className="mt-10 p-5">
                Loading ...
            </div>
        );
    }

    if(error){
        return(
            <div className="mt-10 p-5">Error in fetching the data...
                <span className="block border border-black p-4 text-red-400">{error.message}</span>
            </div>
        )
    }
    return(
        <div 
            style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                width:"50vw"
                  
            }}
        >
            <div 
                style={{
                    marginTop:"10px",
                    
                }}
                className="font-bold text-2xl"
            >Trending Movies</div>
            {(watchListState.length > 0)
            ?
            <div onClick={handleToggleModal} className="border border-gray-200 m-3 px-4 py-2 bg-red-200 rounded-lg text-red-600 font-semibold text-center hover:cursor-pointer">
                Clear Local Storage
            </div>
            :
            <div className="border border-gray-200 m-3 px-4 py-2 bg-gray-200 rounded-lg text-gray-600 font-semibold text-center">
                Clear Local Storage
            </div>
            }

            <ModalComponent localStorageKeys={localStorageState.localStorageKeys} isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} handleYesInModal={handleYesInModal} handleToggleModal={handleToggleModal}/>
            {isSuccess && <SuccessAlertComponent/>}
            {isWatchlistSuccess && <WatchlistSuccessAlertComponent setIsWatchlistSuccessProp={setIsWatchlistSuccess}/>}

            <div className=""
                style={{
                    display:"flex",
                    flexDirection:"row",
                    flexWrap:"wrap",
                    justifyContent:"space-evenly",
                    
                    
                }}
            
            >
                {
                movies.map((movie)=>{
                    return(
                        <div key={movie.id}>
                            <div className="px-1 py-2" key={movie.id}>
                                <MovieCard watchListStateProp={watchListState} addToWLProp={addToWL} removeFromWLProp={removeFromWL} movieObj={movie} localStorageState={localStorageState} setLocalStorageState={setLocalStorageState}/>
                            </div>
                            {/* <div class="relative flex py-5 items-center">
                                <div class="flex-grow border-t border-gray-400"></div>
                                <span class="flex-shrink mx-4 text-gray-400">Content</span>
                                <div class="flex-grow border-t border-gray-400"></div>
                            </div>  */}

                        </div>
                        
                    
                    );
                })
            }
            </div>
            {/* <PaginationComponent onNextClick={handleOnNextClick} onPrevClick={handleOnPrevClick} pageNo={pageNumber}/> */}
            
        </div>
    );
}

export default Movies;

/**
 
const axiosInstance = axios.create({
    baseURL:baseURL,
    headers:{
        //'Authorization':Bearer ,
        //'Content-Type' : 'application/json'
    }
})

const fetchMovies = async () => {
    try {
        const response = await axiosInstance.get(finalUrl);
        console.log("Movies Component",response.data);
        return response.data.results;
        
    } catch (error) {
        console.log(Error);
        return [];
        
    }
}

 */

    
/*
    useEffect(()=>{
        const getMovies = async () =>{
            try{
            const movieData = await fetchMovies();
            
            setMovies(movieData);
            setLoading(false)
            
            }
            catch(error){
                
                setError(true)
                setLoading(false)
            }
        }

        getMovies()

    },
    []);
    */

    