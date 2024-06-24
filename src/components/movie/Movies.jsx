import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
const baseURL = 'https://api.themoviedb.org/3/trending/all/day';
const apiKey = '759a44a0504a2d2f81971272a953a08d';
const finalUrl = `${baseURL}?api_key=${apiKey}&language=en-US&page=1`
const baseImageUrl = "https://image.tmdb.org/t/p/w500";


function Movies(){
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

   useEffect(()=>{
    const fetchMovies = async () => {
        try {
            const response = await axios.get(finalUrl);
            console.log(response.data.results);
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
    /*
    axios.get(finalUrl)
    .then((res)=>{
        console.log("new axios",res.data.results);
        setMovies(res.data.results);
        setLoading(false);

    })
    .catch((error)=>{
        console.log(error);
        setError(true);
        setLoading(false);
    }
    )
    */


   },[])

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
                    marginTop:"10px"
                }}
            >Trending Movies</div>
            
            <div className=""
                style={{
                    display:"flex",
                    flexDirection:"row",
                    flexWrap:"wrap",
                    justifyContent:"center",
                }}
            
            >
                {
                movies.map((movie)=>{
                    return(
                        
                        <div className="p-5" key={movie.id}>
                           <MovieCard movieObj={movie}/>
                        </div>
                    
                    );
                })
            }
            </div>
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