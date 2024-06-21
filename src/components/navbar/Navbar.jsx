import { Link } from "react-router-dom";

function NavbarComponent(){
    return(
        <div className="flex justify-start mt-20 mb-10 space-x-7 text-4xl font-bold text-blue-800">
            <Link to="/">Logo</Link>
            <Link to="/">Movies</Link>
            <Link to="/watchlist">Watchlist</Link>
        </div>
    );

}
export default NavbarComponent;