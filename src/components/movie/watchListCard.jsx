function WatchListCard({
    movieImage,
    movieName,
    movieRatings,
    moviePopularity,
    movieGenre
}){
    return(
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
    );
}

export default WatchListCard;