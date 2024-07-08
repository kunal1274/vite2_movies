import useAsyncFetchNetworkHook from "../hooks/useAsyncFetch";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import useToggleComponentHook from "../hooks/useToggle";
import p from "../../utility/p";
import { useAxiosAll} from "../hooks/useAsyncAxios";
import ApiStructureComponent from "../hooks/useApiStructure";
// import { WrappingTheComponent } from "../hooks/useGenericContextHook";
// import { GenericContextProvider, WrappedComponent } from "../hooks/useGenericContextHook";


const baseUrl = 'https://jsonplaceholder.typicode.com/users'
const baseUrl1 = 'https://dummyjson.com/products'
function HookNetworkAsyncFetch(){
    const {data,loading,error} = useAsyncFetchNetworkHook(baseUrl);
    if (loading){
        return <div>Loading ...</div>
    }

    if (error){
        return <div>Error : {error.message} </div>
    }

    return (
        <div>
            <p>Testing the Hook Network</p>
            <ul>
                {
                   
                    data.map((element,index)=>{
                        return(
                            <li key={element.id}>
                                {element.id} - {element.name}
                            </li>
                        )
                    })
                   
                }
            </ul>
        </div>
    )
}

// export default HookNetworkAsyncFetch;

function HookComponentToggleTesting(){
    const {value : dark,toggleMe:toggleMeLocal}  = useToggleComponentHook(true);
   
    return(
        <div className={`${dark ? 'bg-black' : 'bg-white'} w-[100vw] h-[100vh] flex flex-col justify-center items-center`}>
            <p className={dark ? 'text-blue-300' : 'text-blue-800' }> Testing Toggle Function</p>
            {
            dark
            ?
            <p onClick={toggleMeLocal} className={`flex justify-center items-center ${dark ? 'text-blue-300' :'text-blue-800'} mt-5 hover:cursor-pointer`}> Light Mode : <CiLight className="ml-2"/></p>
            :
            <p onClick={toggleMeLocal} className={`flex justify-center items-center ${dark ? 'text-blue-300' :'text-blue-800'} mt-5 hover:cursor-pointer`}> Dark Mode : <MdDarkMode className="ml-2" /></p>
            }
            
           
            
        </div>
    )
    
}
// export default HookComponentToggleTesting;

function HookComponentToggleTesting2(){
    const {value : isDropdownOpen , toggleMe : handleDropdown } = useToggleComponentHook(false);
    const {value : isDropdownOpen1 , toggleMe : handleDropdown1 } = useToggleComponentHook(false);
    return(
        <>
        
        
        <div className="relative m-10">
            <button onClick={handleDropdown}  id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="m-4 inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span className="sr-only">Action button</span>
                Action
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div id="dropdownAction" 
            className={`z-10 ${isDropdownOpen ? 'block z-10' : 'hidden'} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                </ul>
                <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div>
        </div>

        <div className="relative m-10">
            <button onClick={handleDropdown1}  id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="m-4 inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span className="sr-only">Action button</span>
                Action
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div id="dropdownAction" 
            className={`z-10 ${isDropdownOpen1 ? 'block z-10' : 'hidden'} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                </ul>
                <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div>
        </div>
        </>
    )
}

// export default HookComponentToggleTesting2;

function HookGenericContextTesting1(){
    return(
        <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh]">
            This is context testing.
            {/* <GenericContextProvider prop1="My Dictionary" prop2="Second Dictionary" prop3="Third Dictionary">
            <WrappedComponent/>
            </GenericContextProvider> */}
        </div>
    )
}

function HookGenericContextTesting2(){
    return(
        <div> I am context hook testing 2
            {/* <WrappingTheComponent/> */}
        </div>
    )
}

// export default HookGenericContextTesting1;
// export default HookGenericContextTesting2;


function HookNetworkAsyncAxios(){
    const token = "Not Required";
    const {data,loading,error} = useAxiosAll({
                                                url: baseUrl,
                                                method: 'GET',
                                                body: {},
                                                headers : {
                                                    'Authorization':`Bearer ${token}`,
                                                    'Content-Type':'application/json'
                                                },
                                                params :{
                                                    userId : 1
                                                },
                                                timeout : 5000
                                            }
                                            );

    // const {data,loading,error} = useAxiosAll(baseUrl)
    if (loading){
        return <div>Loading ...</div>
    }

    if (error){
        return <div>Error : {error.message} </div>
    }

    return (
        <div>
            <p>Testing the Hook Network</p>
            <ul>
                {
                   
                    data.map((element,index)=>{
                        return(
                            <li key={element.id}>
                                {element.id} - {element.name}
                            </li>
                        )
                    })
                   
                }
            </ul>
        </div>
    )
}

// export default HookNetworkAsyncAxios;

function HookNetworkApiStructure(){
    return(
        <div>
            <ApiStructureComponent apiUrl={baseUrl1}/>
        </div>
    )
}

export default HookNetworkApiStructure;