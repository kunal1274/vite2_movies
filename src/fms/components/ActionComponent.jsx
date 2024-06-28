import { FaEye, FaFileExport, FaFileImport, FaPause, FaPen, FaPlus, FaPowerOff, FaPrint, FaTrash } from "react-icons/fa6";

function ActionComponent(){
    return(
        <div className="overflow-auto divide-x px-4 py-2 border border-gray-200 rounded-lg flex flex-row space-x-4 justify-start items-center">
            <div className="flex flex-row space-x-5">
                <div className="flex flex-col justify-content items-center pl-2 pr-2 py-2  hover:cursor-pointer hover:text-blue-600">
                    <FaPlus />
                    <p className="mt-2">Add</p>
                </div>
                <div className="flex flex-col justify-content items-center pl-2 pr-2 py-2  hover:cursor-pointer hover:text-blue-600">
                    <FaEye/>
                    <p className="mt-2">View</p>
                </div>
                <div className="flex flex-col justify-content items-center pl-2 pr-2 py-2  hover:cursor-pointer hover:text-blue-600">
                    <FaPen />
                    <p className="mt-2">Edit</p>
                </div>

            </div>
            
            {/* <div className="h-14 m-2 pl-2 pr-2 border-r">
                
            </div> */}
            <div className="flex flex-col justify-content items-center py-2   hover:cursor-pointer hover:text-red-600">
                <div className="ml-4 mr-2 flex flex-col justify-content items-center">
                <FaTrash />
                <p className="mt-2">Delete</p>

                </div>
                
            </div>
            {/* <div className="h-14 m-2 pl-2 pr-2 border-r">
                
            </div> */}
            
                <div className="pl-4 flex flex-col justify-content items-center hover:cursor-pointer hover:text-orange-400">
                    <FaPause />
                    <p className="mt-2">On Hold</p>
                </div>

            <div className="flex flex-row space-x-5">
                <div className="ml-4 flex flex-col justify-content items-center hover:cursor-pointer hover:text-purple-500">
                    <FaFileExport />
                    <p className="mt-2">Export</p>
                </div>
                <div className="ml-4 flex flex-col justify-content items-center hover:cursor-pointer hover:text-purple-500">
                    <FaPrint />
                    <p className="mt-2">Print</p>
                </div>
                <div className="ml-4 flex flex-col justify-content items-center hover:cursor-pointer hover:text-pink-700">
                    <FaFileImport />
                    <p className="mt-2">Import</p>
                </div>
                
                
            </div>
        </div>
    )
}

export default ActionComponent;