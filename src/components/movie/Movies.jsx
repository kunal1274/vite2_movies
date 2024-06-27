import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import PaginationComponent from "../pagination/Pagination";
import { movieContext } from "../../context/example/MovieContext";
const baseURL = 'https://api.themoviedb.org/3/trending/all/day';
const apiKey = '759a44a0504a2d2f81971272a953a08d';
const finalUrl = `${baseURL}?api_key=${apiKey}&language=en-US&page=1`
const finalWithoutPageNoUrl = `${baseURL}?api_key=${apiKey}&language=en-US`
const baseImageUrl = "https://image.tmdb.org/t/p/w500";


function Movies(){
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    // const [pageNumber,setPageNumber] = useState(1);
    const contextValue = useContext(movieContext);
    // console.log(contextValue)

   useEffect(()=>{
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

   },[contextValue.propPageNo])

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
                        
                        <div className="px-1 py-2" key={movie.id}>
                           <MovieCard movieObj={movie}/>
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