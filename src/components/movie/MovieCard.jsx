const baseImageUrl = "https://image.tmdb.org/t/p/w500";

function MovieCard(props){
    const movieImageTest = "https://images.unsplash.com/photo-1718964313551-420f92249238?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8";// props.MovieObj;
    console.log(props.movieObj);
    const movieImage = `${baseImageUrl}${props.movieObj.backdrop_path}`;
    const movieTitle = props.movieObj.name ?? props.movieObj.title;
    return(
        <div
        className="h-[20vh] w-[10vw] bg-cover bg-center flex items-end"
        style={{backgroundImage:`url(${movieImage})`}}
        >
            <div className="text-center w-full text-white font-normal">
                {movieTitle}
            </div>
        </div>
    );
}
export default MovieCard;