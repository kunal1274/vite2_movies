import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { movieContext } from "../../context/example/MovieContext";

const baseURL = 'https://api.themoviedb.org/3/trending/all/day';
const apiKey = '759a44a0504a2d2f81971272a953a08d';
const finalUrl = `${baseURL}?api_key=${apiKey}&language=en-US&page=1`
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

function BannerComponent(){
    const [bannerImage,setBannerImage] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDT09PW1tbb29vR0dHd3d3o6OjZ2dnv7+/k5OTs7Ozh4eHm5ubz8/N5SjDAAAAEgElEQVR4nO3d6XqiUAwG4CIKbuX+L7dS64zLWZKcBBKS72c5zJP30+JCYb6+XGe39gArJ/y+E37fCb/vhN93wu874fed8PtO+H0n/L4Tft8Jv++E33fC7zvh953w+074fSf8vhN+3wm/74Tfd9r8h74/9qYrbBj+eD510y1dNw58Ay0csn843eCPTN35wDnVciH6+8uT/h6bzwGaf/jQ354D38yjLRKS/5rg33LhHm6BUPypR/83I/t44iH4+xy/m678AwqH4D/l+LcCev4JZYP3X/N8g4cAvL/E76ajwIySQfuzBz+bh0C0/1Lkd5Ox94FY/6HM76a9yJhiwfrzL35/OYuMKRasf6jwrR0AsP7iq98cY6+A4cfFu9/773/1+G/sIxD6/U+Fb+0NMNo/VgqQGFIwaP/e+fv/0sd/g18A4P3FD4DWHn7K9z+lT4DmzgURBt7ln/32zgFQHrBj5jdgMvbZbw7pCZsuwCKfeP6nT/GNvfO7h3rA+n57CkwXa69895AP2P34fP73Yu/Id0/DC9ZhGC/zHwCcxqvNx35O8wu2se9732PuDQtzwu874fed8PtO+H0n/L4Tft8Jv++E33fCrzB9t9gXihr989mFpQpQ6L+fXFmoAH3+x7mlZQpQ5///B1aLFKDN/3xmcYkClPlfT6wuUIAu//t5ZfkCVPk/T6uLF6DJn/qrAukCFPlTfPEC9PjTfOkC1PhzfOECtPjzfNkClPhLfNECdPjLfMkCVPhrfMECNPjrfLkCFPghfLEC1vfD+FIFrO6H8oUKWNsP58sUsLIfwxcpYF0/ji9RwKp+LF+gAGY/6p/D8/kL4PUPmOvfKHz2Alj986Vx4PlofO4COP33KwOB81H5zAUw+h8XRoLmo/N5C+DzD5gTNy181gLY/M+XxVbna+NzFsDlf70quDJfK5+xACb/+0XRxfna+XwF8Pg/rwkvzMfBZyuAxZ+6JD47Hw+fqwAOf/KOALl3glx8pgIY/JkbIqQL4OPzFNDuz98PIjEfJ5+lgGZ/6XYYH/Px8jkKaPWXbwf5Nh83n6GARn/lbjiv8/Hz2wto89f4L/NJ8JsLaPLX+U/zyfBbC2jxQ/j/5pPiN95zp2FnGP+vADl+WwH0faH83wIk+U0FkHeF828F5G+ZxBP6MYDqx/C7U/GeaRwhF0D0o/hLhFoAza+OTz4GkHZTyKcWQNlLJZ9YAGEnpXxaAfh91PJJBXDf/3Td4AvA7qGaTygAuYNyPr4A3Hr1fHQBqOUG+NgCMKtN8JEFIBYb4eMKgK81w0cVAF5qiI8pALrSFB9RAHChMT68ANg6c3xwAaBlBvnQAiCrTPKBBQAWGeXDCqivMcsHFVBdYpgPKaC2wjQfUEBlgXF+vYDydvP8agHFzRvg1woobd0Ev1JAYWPuv3kxl1IB+W0befTnFArIbtoQv1RAbsum+IUCMhs2xs8XkP755vjZApI/3iA/V0Dqp/tpg/4p/ScyKf9uowE//x0l/L4Tft8Jv++E33fC7zvh953w+074fWf3AxVTNX0qViC7AAAAAElFTkSuQmCC");
    const [bannerTitle,setBannerTitle] = useState("");

    const contextValue = useContext(movieContext);
    

    useEffect(()=>{
        axios.get(`${baseURL}?api_key=${apiKey}&language=en-US&page=${contextValue.propPageNo}`)
        .then(function(res){
            //console.log(res.data.results);
            const firstMovie = res.data.results[0];
            const firstMovieBannerImage = `${baseImageUrl}${firstMovie.backdrop_path}`;
            const firstMovieTitle = firstMovie.name ?? firstMovie.title; /// if first will fail with null or undefined then it will check for the second value means title. 
            setBannerImage(firstMovieBannerImage)
            setBannerTitle(firstMovieTitle)

        })
        .catch((error)=>{
            console.log(error);
        })
    }
        ,[contextValue.propPageNo])

    return(
        <div
        className="h-[50vh] w-[50vw] bg-cover bg-center flex items-end"
        style={{backgroundImage:`url(${bannerImage})`}}
        >
            <div className="bg-gray-900/60 rounded text-center w-full text-white font-normal">
                {bannerTitle}
            </div>
        </div>
    );
}

export default BannerComponent;