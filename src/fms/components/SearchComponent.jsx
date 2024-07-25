import { FaSearch} from "react-icons/fa";
function SearchComponent(){
    return(
        
            <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-gray-500" />
            <input
                type="text"
                placeholder="Search Globally..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
        </div>
        
        
    )
}

export default SearchComponent;