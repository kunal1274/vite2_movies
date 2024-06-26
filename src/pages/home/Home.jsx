import BannerComponent from "../../components/banner/Banner";
import Movies from "../../components/movie/Movies";
import PaginationComponent from "../../components/pagination/Pagination";
import { useContext, useState } from "react"
import MovieContextProvider from "../../context/example/MovieContext";


export default function HomePage(){
  const [pageNumber,setPageNumber] = useState(1);

  function handleOnNextClick(){
    // console.log("Next")
    setPageNumber(pageNumber+1)
    }

    function handleOnPrevClick(){
        // console.log("Previous")
        if(pageNumber ===1){
            return;
        }
        setPageNumber(pageNumber-1);
    }
    return(

      
        <div className="flex flex-col items-center m-5">
          
          <MovieContextProvider globalPageNo={pageNumber}>
         
        
            <BannerComponent/>
            <PaginationComponent onNextClick={handleOnNextClick} onPrevClick={handleOnPrevClick} pageNo={pageNumber}/>
            <Movies/>
            <PaginationComponent onNextClick={handleOnNextClick} onPrevClick={handleOnPrevClick} pageNo={pageNumber}/>
          </MovieContextProvider>
          
        </div>
    );
}