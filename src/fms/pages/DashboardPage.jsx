import React, { useState, useEffect } from "react";
import freightLogo from "../../assets/images/freight.png"
import StopWatchComponent from "../components/StopWatch";
import CRUDTable from "./CRUDTable";
const images = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
];

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="gallery" className="border border-red-500 relative w-[50vw]" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item={index === activeIndex ? "active" : ""}
          >
            <img
              src={src}
              className="absolute block w-full h-full object-cover"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};


const LogoComponent =() =>{
    return(
        <div className="p-2 flex items-center justify-start rtl:justify-end">
            <a href="https://flowbite.com" className="flex ms-2 md:me-24">
            <img src={freightLogo} className="h-8 me-3" alt="FlowBite Logo" />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Freight Management System</span>
            </a>
        </div>
    )
}

const ProfileComponent =() =>{
    return(
        <div className="flex items-center mr-4">
                        <div className="flex items-center ms-3">
                            <div>
                                <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                                </button>
                            </div>
                            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                            <div className="px-4 py-3" role="none">
                                <p className="text-sm text-gray-900 dark:text-white" role="none">
                                Neil Sims
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                neil.sims@flowbite.com
                                </p>
                            </div>
                            <ul className="py-1" role="none">
                                <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                </li>
                                <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                </li>
                                <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                </li>
                                <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
    )
}

const useHookSidebarToggle = (initialBooleanValue) =>{
    const [isSidebarNavOpen,setIsSidebarNavOpen] = useState(initialBooleanValue);

    const handleSidebarNav = ()=>{
        setIsSidebarNavOpen(!isSidebarNavOpen);
    }

    return {isSidebarNavOpen,handleSidebarNav}
    
}

const LeftSidebarComponent =({isSidebarNavOpen,handleSidebarNav})=>{
    //const {isSidebarNavOpen,handleSidebarNav} = useHookSidebarToggle(false);

    // Icons 
    const crossIcon = (
        <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
            ></path>
        </svg>

    )
    const hamburgerIcon =(
        <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 100-2H3a1 1 0 100 2zm0 4h14a1 1 0 100-2H3a1 1 0 100 2zm0 4h14a1 1 0 100-2H3a1 1 0 100 2z"
                clipRule="evenodd"
            ></path>
            </svg>
    )
    const kanbanSVGIcon= (
        <svg className="flex-shrink-0 w-5 h-5  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
        </svg>
    )
    const inboxSVGIcon =(
        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                            </svg>
    )
    const signUpSVGIcon =(
        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                            <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                            <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
                        </svg>
    )
    const signInSVGIcon = (
        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                        </svg>

    )
    const productsSVGIcon =(
        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                        </svg>

    )
    const dashboardSVGIcon =(
        <svg
        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 21"
        >
        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
        </svg>
    )
    const usersSVGIcon =(
        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
        </svg>
    )

    // Button 
    const menuButton = (
        <button
            onClick={handleSidebarNav}
            type="button"
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className={`mt-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm absolute ${isSidebarNavOpen ? 'top-2.5 end-2.5 inline-flex items-center' :''} dark:hover:bg-gray-600 dark:hover:text-white`}
            >
            {isSidebarNavOpen ? (
                crossIcon
            ) : (
                hamburgerIcon
            )}
            <span className="sr-only">{isSidebarNavOpen ? "Close menu" : "Open menu"}</span>
        </button>

    )

    // List Items 
    const dashboardListItem = (
    <a
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
        {dashboardSVGIcon}
        <span className="ms-3">Dashboard</span>
    </a>
    )

    const dashboardCollapsedListItem = (
        <a
            href="#"
            className="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
            {dashboardSVGIcon}
            
        </a>
        )

    const kanbanListItem = (
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            {kanbanSVGIcon}
            <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
            <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
        </a>
    )

    const kanbanCollapsedListItem = (
        <a href="#" className="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            {kanbanSVGIcon}
            
            <span className="inline-flex items-center justify-center px-1 ms-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
        </a>
    )

    const usersListItem = (
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        {usersSVGIcon}
        <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
        </a>
    )

    const usersCollapsedListItem = (
        <a href="#" className="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        {usersSVGIcon}
        
        </a>
    )

    const productsListItem =(
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        {productsSVGIcon}
                        <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                        </a>
    )

    const productsCollapsedListItem =(
        <a href="#" className="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        {productsSVGIcon}
                       
                        </a>
    )

    const inboxListItem = (
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            {inboxSVGIcon}
                            <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                            </a>
    )

    const inboxCollapsedListItem = (
        <a href="#" className="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            {inboxSVGIcon}
                            
                            <span className="inline-flex items-center justify-center w-3 h-3 px-1 ms-4 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                            </a>
    )
    
    const signInListItem =(
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        {signInSVGIcon}
                        <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                        </a>
    )

    const signInCollapsedListItem =(
        <a href="#" className="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        {signInSVGIcon}
                    
                        </a>
    )

    const signUpListItem =(
        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        {signUpSVGIcon}
                        <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                        </a>
    )

    const signUpCollapsedListItem =(
        <a href="#" className="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        {signUpSVGIcon}
                        
                        </a>
    )

    const expandedSidebar = (
        <div id="drawer-navigation" className={`fixed top-14 left-3 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-0 ${isSidebarNavOpen ? 'w-64' : 'w-64'} bg-gray-100 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label`}>
                <h5 id="drawer-navigation-label" className="mt-2 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
                <div>
                {menuButton}
                </div>
                
            <div className="py-4 overflow-y-auto">
                <ul className="space-y-3 font-medium">
                    <li>
                       
                            
                            {dashboardListItem}
                            

                       
                        
                    </li>
                    <li>
                      
                            
                            
                                {kanbanListItem}
                            
                          
                            
                           
                        
                        
                    </li>
                    <li>
                        
                            {inboxListItem}
                           
                           
                          
                        
                    </li>
                    <li>
                        
                               {usersListItem}

                          
                             

                          
                        
                    </li>
                    <li>
                        
                        {productsListItem}
                           
                      
                        
                    </li>
                    <li>
                        
                        {signInListItem}
                           
                       
                        
                        
                    </li>
                    <li>
                        
                        {signUpListItem}
                           
                        
                    </li>
                </ul>
            </div>
        </div>

    )

    const collapsedSidebar =(
        <div id="drawer-navigation" className={`flex flex-col justify-start items-center fixed top-14 space-y-8 left-3 z-40 w-15 h-screen p-4 overflow-y-auto transition-transform ${isSidebarNavOpen ? 'translate-x-0' : '-translate-x-0'} bg-gray-100 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label`}>
                {/* <h5 id="drawer-navigation-label" className="mt-2 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"></h5> */}
        
            <div>
            {menuButton}
            </div>
            
            <div className="mt-6 py-4 overflow-y-auto">
            
                <ul className="space-y-6 font-medium">
                    <li>
                       
                            
                            {dashboardSVGIcon}
                            {/* <button data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" class="ms-3 mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tooltip right</button>
                            
                            <div id="tooltip-right" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                Tooltip on right
                                <div class="tooltip-arrow" data-popper-arrow></div>
                            </div> */}

                       
                        
                    </li>
                    <li>
                      
                            
                            
                                {kanbanSVGIcon}
                            
                          
                            
                           
                        
                        
                    </li>
                    <li>
                        
                            {inboxSVGIcon}
                           
                           
                          
                        
                    </li>
                    <li>
                        
                               {usersSVGIcon}

                          
                             

                          
                        
                    </li>
                    <li>
                        
                        {productsSVGIcon}
                           
                      
                        
                    </li>
                    <li>
                        
                        {signInSVGIcon}
                           
                       
                        
                        
                    </li>
                    <li>
                        
                        {signUpSVGIcon}
                           
                        
                    </li>
                </ul>
            </div>
        </div>
        
    )

    const dynamicSidebar = (
        <div id="drawer-navigation" className={`fixed top-14 left-3 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-0 ${isSidebarNavOpen ? 'w-64' : 'w-15 space-y-8'} bg-gray-100 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label`}>
                   
                    <div className="">
                    {isSidebarNavOpen ? <h5 id="drawer-navigation-label" className="mt-2 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>:""}
                    {menuButton}
                    </div>
                    
                <div className="py-4 overflow-y-auto">
                    <ul className={`${isSidebarNavOpen ? 'space-y-3' :'space-y-6'} font-medium`}>
                        <li>
                           
                                
                                {isSidebarNavOpen ? dashboardListItem : dashboardCollapsedListItem}
                                
    
                           
                            
                        </li>
                        <li>
                          
                                
                                
                                    {isSidebarNavOpen ? kanbanListItem : kanbanCollapsedListItem}
                                
                              
                                
                               
                            
                            
                        </li>
                        <li>
                            
                                {isSidebarNavOpen ? inboxListItem : inboxCollapsedListItem}
                               
                               
                              
                            
                        </li>
                        <li>
                            
                                   {isSidebarNavOpen ? usersListItem :usersCollapsedListItem}
    
                              
                                 
    
                              
                            
                        </li>
                        <li>
                            
                            {isSidebarNavOpen ? productsListItem : productsCollapsedListItem}
                               
                          
                            
                        </li>
                        <li>
                            
                            {isSidebarNavOpen ? signInListItem : signInCollapsedListItem}
                               
                           
                            
                            
                        </li>
                        <li>
                            
                            {isSidebarNavOpen ? signUpListItem : signUpCollapsedListItem}
                               
                            
                        </li>
                    </ul>
                </div>
            </div>
    
    )
    return(
        <>
        {
            // isSidebarNavOpen ?
            // expandedSidebar :
            // collapsedSidebar
            dynamicSidebar
        
        }
        </>
        

    )
}



const Carousel = () => { 
    return(
        <div id="gallery" className="border border-pink-400 relative w-[60vw]" data-carousel="slide">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* <!-- Item 1 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                </div>
                {/* <!-- Item 3 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                </div>
                {/* <!-- Item 4 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                </div>
                {/* <!-- Item 5 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                </div>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

    )
}

function DashboardPage(){
    const {isSidebarNavOpen,handleSidebarNav} = useHookSidebarToggle(false);
    return(
        <div className="grid grid-cols-6 gap-4  p-2 m-1 h-full sm:grid-cols-5">
            {/* First row */}
            <div className="grid grid-cols-6 col-span-6 gap-2 bg-gray-100">
                <div className="col-span-1  flex flex-row justify-start items-center">
                    
                <LogoComponent/>
                </div>
                <div className="col-start-2 col-span-4 "></div>
                <div className="col-span-1 flex flex-row justify-end items-center">
                    
                    <ProfileComponent/>
                </div>
            </div>

            {/* Second row */}
            <div className={`grid grid-cols-6 col-span-6 h-[90vh] gap-2`}>
                <div className="col-span-1">
                    
                <LeftSidebarComponent isSidebarNavOpen={isSidebarNavOpen} handleSidebarNav={handleSidebarNav}/>
                   
                </div>
                <div className={`${isSidebarNavOpen ? 'col-start-2 col-span-5 items-center' : 'col-start-1 col-span-6 items-center mt-0'} flex flex-col`}>
                
                {/* <Carousel/> */}
                <CarouselComponent/>
                <StopWatchComponent/>
                <CRUDTable/>
                
                    
                </div>
            </div>
        </div>
    )
}



export default DashboardPage;