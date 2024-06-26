import { Link } from "react-router-dom";
import logo from "../../assets/images/movie.jpeg"

function NavbarComponent(){
    return(
        <div className="flex flex-col justify-start items-center mt-20 mb-10 space-x-7 text-4xl font-bold text-blue-800 sm:flex-row">
            <Link to="/">
                <img src={logo} className="w-[60px] h-[60px]" alt="movie_logo"/>
            </Link>
            <Link to="/">Movies</Link>
            <Link to="/watchlist">Watchlist</Link>
            {/* <Link className="text-xl text-blue-600 font-normal" to="/adaptablecounter">Dynamic Redux Counter</Link>
            <Link className="text-xl text-blue-600 font-normal" to="/counter">Static Redux Counter</Link>
            <Link className="text-xl text-blue-600 font-normal" to="/entertext">Redux Texting</Link> */}
            <Link className="text-lg text-blue-600 font-normal" to="/todo">To Do</Link>
            <Link className="text-lg text-blue-600 font-normal" to="/user">Users</Link>
        </div>
    );

}
export default NavbarComponent;