import p from "../../utility/p";
import { forwardRef, useEffect, useRef, useState } from "react";

const WatchListCard = forwardRef(function WatchListCardAnonymous(
    {
    movieWatchListObj,
    handleRemoveWatchlistProp,
    movieImage,
    movieName,
    movieRatings,
    moviePopularity,
    movieGenre,
    isLatest
    },
    ref
    )
    {

    // const handleRemoveWatchlist = (id) =>{
    //     p("removed",id)
    // }
    return(
            <tr ref={ref} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ${isLatest ? 'bg-blue-100':''}`}>
                <td className="p-4">
                    <img src={movieImage} className="w-16 md:w-32 max-w-full h-24 rounded-lg" alt="Apple Watch"/>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {movieName}
                </td>
                
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                   {movieRatings}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {moviePopularity}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {movieGenre}
                </td>
                <td className="px-6 py-4">
                    <button onClick={()=> handleRemoveWatchlistProp(movieWatchListObj.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                </td>
            </tr>
    );
});

export default WatchListCard;