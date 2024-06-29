import { useEffect, useState } from "react";
import WatchListCard from "./watchListCard";
import p from "../../utility/p";
import { FaReact } from "react-icons/fa";

const baseImageUrl = "https://image.tmdb.org/t/p/w500";

function MovieWatchList(){

    const [watchListData,setWatchListData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false)

    useEffect(()=>{
        try {
            let localWatchListData = JSON.parse(localStorage.getItem('watchList'))
            if(localWatchListData === null){
                localWatchListData =[];
            }
            setWatchListData(localWatchListData)
            //p(watchListData)
            setIsLoading(false)
            
        } catch (error) {
            setIsError(true)
            setIsLoading(false)
            
        }
    },
    [])
    if(isLoading){
        return(
            <div>Loading data from local storage...</div>
        )
    }
    if (isError){
        return(
            <div>Error in fetching the data from local storage</div>
        )
    }
    // p(watchListData)
    return(
        
                <div className="w-[50vw] overflow-x-auto">
                    
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-16 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ratings
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Popularity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Genre
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                
                                (watchListData.length > 0 )
                                    ?
                                    watchListData.map((elementWatchList)=>{
                                        p(elementWatchList)
                                        const movieImage = `${baseImageUrl}${elementWatchList.backdrop_path}`;
                                        const movieName = elementWatchList.name ?? elementWatchList.title;
                                        const movieRatings = elementWatchList.vote_average;
                                        const moviePopularity = elementWatchList.popularity;
                                        const movieGenre = elementWatchList.genre_ids[0]
                                        return(
                                            <WatchListCard key={elementWatchList.id}
                                            movieImage={movieImage}
                                            movieName={movieName}
                                            movieRatings={movieRatings}
                                            moviePopularity ={moviePopularity}
                                            movieGenre={movieGenre}
                                            />
                                        );
                                    })
                                    :
                                    <tr>
                                        <td colSpan={6} className="">
                                            <div className="flex flex-col justify-center items-center m-10 ">
                                                <p className="mb-5">You have an empty Watchlist</p>
                                                <FaReact />
                                            </div>
                                            
                                        </td>
                                    </tr>
                            
                            }
                            
                        </tbody>
                    </table>
                </div>
                </div>

        
    )
}

export default MovieWatchList;