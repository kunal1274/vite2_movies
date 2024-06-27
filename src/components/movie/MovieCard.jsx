const baseImageUrl = "https://image.tmdb.org/t/p/w500";

function MovieCard(props){
    const movieImageTest = "https://images.unsplash.com/photo-1718964313551-420f92249238?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8";// props.MovieObj;
    // console.log(props.movieObj);
    const movieImage = `${baseImageUrl}${props.movieObj.backdrop_path}`;
    const movieTitle = props.movieObj.name ?? props.movieObj.title;
    return(
        <div
        // className="h-[30vh] w-[10vw] bg-cover bg-center bg-norepeat flex items-end"
        className="hover:scale-110 hover:cursor-pointer duration-300"
        style={{
            height:"30vh",
            width:"10vw",
            backgroundImage:`url(${movieImage})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            alignItems:"flex-end",
            borderRadius:"8px" 
    
    }}
        >
            <div className="h-8 w-8 flex justify-center items-center m-3 bg-gray-900/60 rounded"> 
                {String.fromCodePoint(0x1F60D)}
            </div>
            <div className="bg-gray-900/60 rounded text-center w-full text-white font-normal">
                {movieTitle}
            </div>
        </div>
    );
}
export default MovieCard;