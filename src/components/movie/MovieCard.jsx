import p from "../../utility/p";

const baseImageUrl = "https://image.tmdb.org/t/p/w500";

function checkIdMatch(givenParamId,targetParamId){
    return (givenParamId === targetParamId);
}
function MovieCard(props){
    const movieImageTest = "https://images.unsplash.com/photo-1718964313551-420f92249238?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8";// props.MovieObj;
    // console.log(props.movieObj);
    const movieImage = `${baseImageUrl}${props.movieObj.backdrop_path}`;
    const movieTitle = props.movieObj.name ?? props.movieObj.title;
    // console.log(props.movieObj,props.localStorageState);
    //const wLValues = props.localStorageState.watchListValues;
    const movieObject = props.movieObj
    const addToWLFun = props.addToWLProp;
    const removeFromWLFun = props.removeFromWLProp;

    // console.log("test1",wLValues,movieObject);
    // let isMovieInWatchList = false;
    //p("1",props.watchListStateProp)
    const isMovieInWatchList = props.watchListStateProp.some(movie => movie.id === movieObject.id);
    // console.log(isMovieInWatchList)
    
    // // if (wLValues.length > 0 ){
    // if(wLValues){
    // isMovieInWatchList =  wLValues.some(ele => ele.id === movieObject.id)
    // console.log("availability", isMovieInWatchList)
    // }
    // }
    // else{
    //     isMovieInWatchList = false;
    // }
    

    // const addToWatchlist =() =>{
        
    //     const movieWatchList = JSON.parse(localStorage.getItem("watchList"));
    //     let updatedMovieWatchList = null;
    //     if(movieWatchList === null){
    //         console.log("Adding to Watchlist if localStorage is empty")
    //         updatedMovieWatchList = [props.movieObj]
    //         localStorage.setItem("test",3)
    //     }
    //     else{
    //         console.log("Adding to Watchlist if localStorage has some data")
    //         updatedMovieWatchList = [...movieWatchList,props.movieObj]
    //         localStorage.setItem("test1",4)

    //     }
    //     localStorage.setItem("watchList",JSON.stringify(updatedMovieWatchList)); // changing the object into strings and then storing it 
    //     localStorage.setItem("movies",1)
    //     localStorage.setItem("Hello",2)
    //     const event = new Event('localStorageUpdate');
    //     window.dispatchEvent(event);
    //     ((key,value)=>{
    //         localStorage.setItem(key,value);
    //         window.dispatchEvent(new Event('localStorageUpdate'));
    //     })("weird Movie Card",10)
        
          
    // }

    
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
            {
                isMovieInWatchList
                ?
                <div  onClick={()=>removeFromWLFun(movieObject)}className="h-8 w-8 flex justify-center text-red-500 items-center m-3 bg-gray-900/60 rounded"> 
                    {String.fromCodePoint(0x2716)}
                </div>
                :
                <div  onClick={()=>addToWLFun(movieObject)} className="h-8 w-8 flex justify-center items-center m-3 bg-gray-900/60 rounded"> 
                    {String.fromCodePoint(0x1F60D)}
                </div>
               
                

            }
            
            <div className="bg-gray-900/60 rounded text-center w-full text-white font-normal">
                {movieTitle}
            </div>
          
        </div>
    );
}
export default MovieCard;

