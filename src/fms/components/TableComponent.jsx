import '../../index.css';
import ActionComponent from './ActionComponent';
import SearchComponent from './SearchComponent';
import { FaSortAlphaDown } from "react-icons/fa";

function TableComponent(){
    return(
        <>
        <div className='m-4'>
            <ActionComponent/>
        </div>
        <div className='m-4 w-[30vw]'>
            <SearchComponent/>
        </div>
        <div className="border overflow-auto border-gray-300 m-4 rounded-xl">
            <table className="table-auto w-full border-collapse m-4">
                <caption class="font-sans caption-top mb-5 font-heading font-bold text-center text-2xl sm:text-3xl text-gray-900">
                    Table 3.1: Vendor List
                    <p className="font-sans mb-4 mt-2 text-gray-500 font-normal text-xs">Maintain the Vendor Master List. All types of Vendors like Truckowners , Service Providers , Distributors , Suppliers 
                        and even drivers can be maintained over here.
                    </p>
                </caption>
                
                <thead className="">
                    
                    
                </thead>
                <tbody className="w-full">
                <tr className="border-b w-full">
                        <th className='px-4 text-left  py-2'>
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </th>
                        <th className="px-4 text-left  py-2"></th>
                        <th className="px-4 text-left  py-2">
                        <div className='flex flex-row justify-start'>
                            <div className='flex flex-row justify-center items-center space-x-2'>
                            <p>Code</p>
                            <FaSortAlphaDown />
                            </div>
                            </div>
                        </th>
                        <th className="px-4 text-left  py-2"> 
                        <div className='flex flex-row justify-start'>
                            <div className='flex flex-row justify-center items-center space-x-2'>
                            <p>Name</p>
                            <FaSortAlphaDown />
                            </div>
                            </div>
                            </th>
                        <th className="px-4 text-left  py-2 ">
                            <div className='flex flex-row justify-start'>
                                <div className='flex flex-row justify-center items-center space-x-2'>
                                    <p>Address</p>
                                    <FaSortAlphaDown />
                                </div>

                            </div>
                        
                        </th>
                        <th className="px-4 text-left  py-2">
                        <div className='flex flex-row justify-start'>
                        <div className='flex flex-row justify-center items-center space-x-2'>
                            <p>Contact</p>
                            <FaSortAlphaDown />
                            </div>
                            </div>
                        </th>
                        <th className="px-4 text-left  py-2">
                        <div className='flex flex-row justify-start'>
                        <div className='flex flex-row justify-center items-center space-x-2'>
                            <p>Email</p>
                            <FaSortAlphaDown />
                            </div>
                            </div>
                        </th>
                        <th className="px-4 text-left  py-2 ">
                        <div className='flex flex-row justify-start'>
                        <div className='flex flex-row justify-center items-center space-x-2'>
                            <p>Group</p>
                            <FaSortAlphaDown />
                            </div>
                            </div>
                        </th>
                        <th className="px-4 py-2 ">
                        <div className='flex flex-row justify-center'>
                        <div className='flex flex-row justify-start items-center space-x-2'>
                            <p className=''>Status</p>
                            <FaSortAlphaDown />
                        </div>
                        </div>
                        </th>

                    </tr>
                    <tr className="border-b w-full">
                        <td className="px-4 text-left  py-2">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </td>
                        <td className="px-4 text-left  py-2"><img className="m-2 h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" alt="christine"/></td>
                        <td className="px-4 text-left  py-2">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">V001</a>
                            
                        </td>
                        <td className="px-4 text-left  py-2">Christine Ronaldo</td>
                        <td className="px-4 text-left text-balance  py-2">Sector 3D,Qr No. 402,B.S.City,Bokaro,Jharkhand - 827003,India..Sector 3D,Qr No. 402,B.S.City,Bokaro,Jharkhand - 827003,India </td>
                        <td className="px-4 text-left text-nowrap py-2">+91 9313478554</td>
                        <td className="px-4 text-left  py-2">christine@gmail.com</td>
                        <td className="px-4 text-left  py-2">Local</td>
                        <td className="px-4 text-left text-nowrap  py-2">
                            <div className="flex items-center justify-center text-sm rounded-lg w-40 h-10 px-2 py-2 bg-green-100 text-green-500 text-center font-semibold">
                                Active
                            </div>
                            
                        </td>
                    </tr>
                    <tr className="border-b">
                    <td className="px-4 text-left  py-2">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </td>
                        <td className="px-4 text-left  py-2"><img className="m-2 h-10 w-10 rounded-full" src="https://plus.unsplash.com/premium_photo-1674180786953-4223a4208d9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww" alt="Michael"/></td>
                        <td className="px-4 text-left  py-2"><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">V002</a></td>
                        <td className="px-4 text-left  py-2">Michael Smith</td>
                        <td className="px-4 text-left text-balance   py-2">123 Main Street, Springfield, IL, USA</td>
                        <td className="px-4 text-left text-nowrap py-2">+1 217-555-0198</td>
                        <td className="px-4 text-left  py-2">michael.smith@example.com</td>
                        <td className="px-4 text-left  py-2">Interstate</td>
                        <td className="px-4 text-left text-nowrap  py-2">
                        <div className="flex items-center justify-center text-sm rounded-lg w-40 h-10 px-2 py-2 bg-red-100 text-red-500 text-center font-semibold">
                                Inactive
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b ">
                    <td className="px-4 text-left  py-2">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </td>
                        <td className="px-4 text-left  py-2"><img className="m-2 h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJ_hOG43dHw4j8gsM7jGhLkD9XygtWcANUQ&s" alt="Image 3"/></td>
                        <td className="px-4 text-left  py-2"><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">V003</a></td>
                        <td className="px-4 text-left  py-2">Sarah Johnson</td>
                        <td className="px-4 text-left text-balance  py-2">45 Elm Street, London, UK</td>
                        <td className="px-4 text-left text-nowrap  py-2">+44 20 7946 0958</td>
                        <td className="px-4 text-left  py-2">sarah.johnson@example.co.uk</td>
                        <td className="px-4 text-left  py-2">Foreign</td>
                        <td className="px-4 text-left text-nowrap py-2">
                            <div className="flex items-center justify-center text-sm rounded-lg w-40 h-10 px-2 py-2 bg-orange-100 text-orange-500 text-center font-semibold">
                                On Hold
                            </div></td>
                    </tr >
                    <tr className="border-b ">
                    <td className="px-4 text-left  py-2">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </td>
                        <td className="px-4 text-left  py-2">
                            <img className="m-2 h-10 w-10 rounded-full" style={{}} src="data:image/jpeg;base64,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" alt="Image 4"/></td>
                        <td className="px-4 text-left  py-2"><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">V004</a></td>
                        <td className="px-4 text-left  py-2">Rajesh Kumar</td>
                        <td className="px-4 text-left text-balance  py-2">56 MG Road, Bangalore, Karnataka, India</td>
                        <td className="px-4 text-left text-nowrap py-2">+91 9988776655</td>
                        <td className="px-4 text-left  py-2">rajesh.kumar@example.in</td>
                        <td className="px-4 text-left  py-2">Local</td>
                        <td className="px-4 text-left text-nowrap  py-2"> 
                            <div className="flex items-center justify-center text-sm rounded-lg w-40 h-10 px-2 py-2 bg-green-100 text-green-500 text-center font-semibold">
                                Completed
                            </div></td>
                    </tr>
                    <tr className="px-4 text-left  py-2">
                    <td className="px-4 text-left  py-2">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </td>
                        <td className="px-4 text-left  py-2"><img className="m-2 h-10 w-10 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADSCAMAAABD772dAAAAkFBMVEX///9BQUM/P0H///1BQEU8PD5AQEH+/v83NzlBQUQxMTP7+/s4ODo0NDZDQ0UvLzD19fVKSkzZ2dmMjI6goKDk5OQtLS/u7u5cXF7GxsfR0dIrKytra22UlJXT09UnJyq2traCgoJ4eHpVVViurq7AwMJ6enqpqauGhofCwsJkZGRxcXFXV1np6ehOTlGcnJxazL1SAAAJY0lEQVR4nOWda3eiOhSGSWwiBhLAC96rtra2auv//3eTgLbWakVIyI7z9MxZ50PXGt6zw74mwfPqo9lU/w76j/Pu22SbCISQ+BxsOqv3Xvz9SzU+UA20l6/PUcR9grFUK38QJoTzlKyno0z0XekdvSWMhZQqyyKE9oqz/8TEj+hmGNyJ4ob805viNMSIIin4IDdXnEElJKK7/mHlO4x6/scnHuKDuMsQP+z078DI7UlKMLquFwmMQrYKbD9vBdTy7HfGRC7lIoLVL2H23Lb92OVpBt4o8YsoPV7YfCn/T7m6sLszfKNe6cHGCxmvbT95ORZMCmjdKphGT4Gbil/ZzebN4Rvbj16KDivmqs7A3mw/fAm6ES0pV5IubT/+zaxmMhqJ0ppZ26kUpOktWcHYewEycEqwt4qQKG9eRTR3SfFuVkVrBhZuRKam/AleeWW9MjbNXcm4ep8+uj3B+gV5/nCiWAy6nNBK/upLMR+BTbi+DTHc6ljOCioL5BeLmv5iuG/D9ZdJRHQY98Bs7gUAjRwk+HW36nbWnGl4d78RGKVDiMEp5oT43A8J1fPyHoF9iP2AXqpX5TEkieFFp2HZMrAA1H+1Le83S12O+ZxgKnNMaHRv7VvdBBZ92wJPWRCTgpHfgeWpm97arGA869nWeMKn1uj7m3BhW+EJoVm9clH3YM3ZItOCwykowYFhwVRgEV9/jPqIjVsYpe+QLPxhXjABlW71zAtGkW2Rx9Qi+NG2yiNqEIz5yrbKI2oQLEDVTDUIpmRgW+URNXhpWCVTDXEYIQaogDCdaSkwG9mWeUQtFobUojZbDufwuW2VR2wN18OZYEiBeFKDiX1IgjvGOwDALLwy2Kb9Egxpl8uLwUb8l+C5bZVHtGuoHtjQtsojYqZ5hPYbkUIaqgXP5uMSAZRaet4T0T0m/aU3AdXG2xkdLmWCIZWHZuelOcCGDx+mUy0BKu+QbA0rhlUdSjqmTZyC8lnyJTacepCtbYUnxONKO2ev4u9sKzzF8Ew8BfYKq30tJjMPYNNDRc83mWupKAxoepgxMZhdYg6pVMoIvLnJJgC8FS39tEGvBSyv3PNmTDGeQZqVfmFuhylObGs7w3w5JKa6AATgip6MOTfX9eAT2/pOeYz0bw0/QjBIDS3FilNqMtMCNXZQTA2PHtROPFAYnrWIsGNb4QmGLSx8aBbu+rce9L8Nv2tb4Qlzs21aAWqwpHhMjfbhMQOVWzZkWhmanbWAmrM0pOA4MSoYg5qzKMHewGhLC9acJRNs9CCPCEHd6pEJNtrvQGxuW+QxmeBHo9M0YE5aCQ6q3+rwB7MAVMtSCfaeDU4eyBZcj9Zs+QCudFCY9FqwfNaenkGvFUHKsw4ExjaYCrIFeM9DVhKb8Vvwqv+ckbE1DW23wwFBjViYUmFb2QV2vhnB8Ib/e/pmdj3QMaDzO8cEXjcy0diKoLWzvgiCCdNeJBI2ARmTFE0vmG40t7aSzRSs3vyuYb2NADU2bNiW9RcNmVILjUM1kEn0T3qpziFiCjGJPkEUuiu8GBjZVlMAnXUx0CT6Jzq3ioM6yHKJGGm7BBAjSO33i7yGmjJMGkI69n+Z9yq3Sv8QHL3b1lKIPtEkGBOgVcMpr5r8tCMrWvrpVGhxW5ELPlrR1LOkMYXXfL9AV8tecXDbOi7QaHg9LT157kAerVCjtScNNSJ5sq2kIEqwjo4t1N7sL7Lh6bZyegnuYNZFMsHDynvFU1diUi7YGxBRqYPp0FctcsFVi0QG8t7wv5hUyqjJxInvHRzTnlWZNM3a8A6iXaNTIfvIrld2TXCFzYiwNhoWpOm9lzYxf3HOvEpweUftnov21Cyx/EX5oO5VKk75u0zAHXAoRvmxGsyzpFfZlBZMnPzoYTAoH5Zg7su6QixKC6bUwTjs9cv342nkSEP6B+1xWb2IgrocrShV7qpxYmp4SpXtxODOoRWhwgd6KHekJf2DtwoTJgLq1E5BqlxGRNa2n74EVT7UiqHunz1HI+/iebPygikdWxZxC1Kv6r/Fs/KteCk4dqenldu3V+WMPKX+1JFJWk5/9cyqnBinFPnseflhW0dBRpMZxw8V9GYIwscTUCcOLzJKEXqovlNcCDp2Y4DYx/jhobqF1cp2o2gKqn0q/RuAF/+dpa/rNA/Gbli4p+00j+9GbBrq2nroSlnc0bW51I3t0l6w1XYiDz+70L1sM23n00QEv7fVrFT4nwLr+o7zxBrvehQ4gh6Jm15X6yXE8JtbFeYN56Dgk62u3rseBHQT97neI8SUhkDTy30/ZqEt6Tgo9hce0G6PamQNI83XAGCR55cgFXujSYq0X9cqUDSB2Qd4WacEaRfcQoKSdA3ok4dBticyWCb6T8N/Q1iyzNJqIEu73yUMoYccM5IxI10o/vqjQ7haySYFC4QpJx3bjVu1wNpPqfFvSx0IZ0/t/K9t5NSu1htu0jo+W7pHoDDaZF0QG4IlLwNmwDFfBgvpsqPBS/33PijrxvMkqtG6BygiUTKvv6SIuwmr4Yu058Es6cZenYcEPjqcY1399tuRPpvzGl12exHV5pgv0JIumy0OHS+zHmy04WFtbupPCN+MvvWaUdwcDmYEVzuDpQkhCceDYWAwRgXzrXLMMOybzxdJtJ0baF43s10bK2Hw4ySlwVx0tUuWcj92MmMGqBcpyeFOt8vuvYUQrfuFTzo6J43tp/H+VD+Q1/cE9VTh7FXHXEblMqNaC4TykLGWXtD7wGQrQy+EDbLLbMpHqGD+aaNAKI0g6WfJKJXVQ6tPewVCWTD7XMU3977U7/d3IXfJuqj10MrALNzd3v7qTTmHkEDewL6n1kJC1lLTgoF5vxR6b8R2PVQRP1wUC8zqjW9vZoY/CFYDNJxt2krPVR822oydenUvIRBJN9cD82jNdA8ALSID8yXJ+cs7HLiRVBUHp4Nh0wuaZ1f2+yByLuxeZO+zhVB93bMNv3eZVN3PYv4e/Mh3mX0eXZ+47420B+n9WPcXeDx4PLy2Sm/Dm7pTIZSBUsIP9woo+8YThmFWutoQiK2/xhXB2r9zuVmLwF8fPPXGR46lzeXwN/lrvIpapub2UNi77Eh907fZJ1jWVLYfySzSovKfB5Ltcus4XhfdgOCdbDfoHaUbV8CtWMP9hA7RYkP1Wah7j0lfyCxz6k3uOKP8DZl4yb3nWEdIZ5V4/8+CzvH+M73iHw/rszkgWDfKAAAAAElFTkSuQmCC" alt="generic_avatar"/></td>
                        <td className="px-4 text-left  py-2"><a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">V005</a></td>
                        <td className="px-4 text-left  py-2">Emily Davis</td>
                        <td className="px-4 text-left text-balance  py-2">789 Broadway, New York, NY, USA</td>
                        <td className="px-4 text-left text-nowrap py-2">+1 212-555-0123</td>
                        <td className="px-4 text-left  py-2">emily.davis@example.com</td>
                        <td className="px-4 text-left  py-2">Interstate</td>
                        <td className="px-4 text-left text-nowrap  py-2">
                        <div className="flex items-center justify-center text-sm rounded-lg w-40 h-10 px-2 py-2 bg-purple-100 text-purple-500 text-center font-semibold">
                                Processing
                            </div>
                        </td>
                    </tr>
                </tbody>
                

            </table>
        </div>
        </>
    )
}

function TableComponent1(){
    return(
        <>
        <div class="container mx-auto px-4">
            <div class="overflow-x-auto">
            <table class="w-full">
                <tbody>
            <tr>
            <th></th>
            <th>
              <div class="px-12 pb-7 text-left">
                <h3 class="mb-1 font-heading text-xl font-bold text-gray-900">Free</h3>
                <p class="mb-1 font-heading font-bold text-3xl text-transparent bg-clip-text bg-gradient-orange">$0</p>
                <p class="text-sm font-normal text-gray-600">Best for freelancers</p>
              </div>
            </th>
            <th>
              <div class="px-12 pb-7 text-left">
                <h3 class="mb-1 font-heading text-xl font-bold text-gray-900">Starter</h3>
                <p class="text-sm font-normal text-gray-600">Best for small agecny</p>
              </div>
            </th>
            <th>
              <div class="px-12 pb-7 text-left">
                <h3 class="mb-1 font-heading text-xl font-bold text-gray-900">Professional</h3>
                <p  class="mb-1 font-heading font-bold text-3xl text-transparent bg-clip-text bg-gradient-orange">$49/mo</p>
                <p  class="hidden mb-1 font-heading font-bold text-3xl text-transparent bg-clip-text bg-gradient-orange">$588/year</p>
                <p class="text-sm font-normal text-gray-600">Best for big agency</p>
              </div>
            </th>
            <th>
              <div class="px-12 pb-7 text-left">
                <h3 class="mb-1 font-heading text-xl font-bold text-gray-900">Exclusive</h3>
                <p  class="mb-1 font-heading font-bold text-3xl text-transparent bg-clip-text bg-gradient-orange">$99/mo</p>
                <p  class="hidden mb-1 font-heading font-bold text-3xl text-transparent bg-clip-text bg-gradient-orange">$1188/year</p>
                <p class="text-sm font-normal text-gray-600">Best for enterprises</p>
              </div>
            </th>
            </tr>
            <tr>
            <td class="border-b border-t border-gray-200">
              <div class="pt-6 pb-4 px-12 pl-0">
                <p class="text-lg text-gray-900">Cloud Storage</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="pt-6 pb-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">5 GB</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="pt-6 pb-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">100 GB</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="pt-6 pb-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">500 GB</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="pt-6 pb-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">2 TB</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12 pl-0">
                <p class="text-lg text-gray-900">Maximum Interval Time</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">15 mins</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">5 mins</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">No Intervarl</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">No Intervarl</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12 pl-0">
                <p class="text-lg text-gray-900">Number of Websites</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">1</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">10</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">100</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">Unlimited</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12 pl-0">
                <p class="text-lg text-gray-900">Custom Domain</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">2</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">20</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">Unlimited</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">Unlimited</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12 pl-0">
                <p class="text-lg text-gray-900">Queries</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">50</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">150</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">500</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">Unlimited</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12 pl-0">
                <p class="text-lg text-gray-900">Email Accounts</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">5</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">Unlimited</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">Unlimited</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg text-gray-900">Unlimited</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12 pl-0">
                <p class="text-lg text-gray-900">Email Notification</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082"></path>
                  </svg>
                </p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082"></path>
                  </svg>
                </p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082"></path>
                  </svg>
                </p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082"></path>
                  </svg>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12 pl-0">
                <p class="text-lg text-gray-900">SMS Notification</p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#A1A1AA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082"></path>
                  </svg>
                </p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082"></path>
                  </svg>
                </p>
              </div>
            </td>
            <td class="border-b border-t border-gray-200">
              <div class="py-4 px-12">
                <p class="font-heading font-semibold text-lg">
                  <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#14B082"></path>
                  </svg>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="py-4 px-12 pl-0"></div>
            </td>
            <td>
              <div class="pt-4 px-12">
                <button class="font-heading font-bold px-11 py-2.5 text-base text-gray-900 border border-gray-200 hover:border-gray-300 rounded-md">Choose</button>
              </div>
            </td>
            <td>
              <div class="pt-4 px-12">
                <button class="group relative font-heading font-bold px-11 py-2.5 text-base bg-gradient-orange text-white overflow-hidden rounded-md">
                  <div class="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gray-900 transition ease-in-out duration-500"></div>
                  <p class="relative z-10 group-hover:text-white">Choose</p>
                </button>
              </div>
            </td>
            <td>
              <div class="pt-4 px-12">
                <button class="font-heading font-bold px-11 py-2.5 text-base text-gray-900 border border-gray-200 hover:border-gray-300 rounded-md">Choose</button>
              </div>
            </td>
            <td>
              <div class="pt-4 px-12">
                <button class="font-heading font-bold px-11 py-2.5 text-base text-gray-900 border border-gray-200 hover:border-gray-300 rounded-md">Choose</button>
              </div>
            </td>
          </tr>
          </tbody>
            </table>
            </div>
        </div>
       
        </>
    );
}

export default TableComponent;