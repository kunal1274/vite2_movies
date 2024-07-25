import { useState } from "react";
import ActionComponent from "./ActionComponent";
import SearchComponent from "./SearchComponent";

function TableComponentV1(){
    const [isDropdownOpen,setIsDropdownOpen] = useState(false);
    const handleDropdown =() =>{
        setIsDropdownOpen(!isDropdownOpen);
    }
    return(
        <div className="m-4">
            

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<div className='m-4'>
           <ActionComponent/>
        </div>
        
    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div className="relative">
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
        <label for="table-search" className="sr-only">Search</label>
        <div className="m-4 relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
        </div>
    </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption class="font-sans caption-top mb-5 font-heading font-bold text-center text-2xl sm:text-3xl text-gray-900">
                    Table 3.1: Vendor List
                    <p className="font-sans mb-4 mt-2 text-gray-500 font-normal text-xs">Maintain the Vendor Master List. All types of Vendors like Truckowners , Service Providers , Distributors , Suppliers 
                        and even drivers can be maintained over here.
                    </p>
                </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Position
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-base font-semibold">Neil Sims</div>
                        <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    </div>  
                </th>
                <td className="px-6 py-4">
                    React Developer
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-base font-semibold">Bonnie Green</div>
                        <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    Designer
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-base font-semibold">Jese Leos</div>
                        <div className="font-normal text-gray-500">jese@flowbite.com</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    Vue JS Developer
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-base font-semibold">Thomas Lean</div>
                        <div className="font-normal text-gray-500">thomes@flowbite.com</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    UI/UX Engineer
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="data:image/png;base64,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" alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-base font-semibold">Leslie Livingston</div>
                        <div className="font-normal text-gray-500">leslie@flowbite.com</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    SEO Specialist
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Offline
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>


    );
}

export default TableComponentV1;