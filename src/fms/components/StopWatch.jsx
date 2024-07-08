import { useRef, useState,useEffect } from "react";
import { FaArrowRotateLeft, FaPause, FaPlay } from "react-icons/fa6";
// import pauseIcon from "../../assets/images/pause-svgrepo-com.svg"
import { LuTimerReset } from "react-icons/lu";
import p from "../../utility/p";

const PauseIcon = (props) =>{
    return(
        <svg viewBox="0 0 24 24" fill={props.fill} className={props.classN} xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5V19M16 5V19" stroke={props.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const BatteryChargeMinimalisticSolid = (props) => {
    return(
        <svg className={props.classN} viewBox="0 0 24 24" fill={props.mainFill} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H11.5C15.2712 4 17.1569 4 18.3284 5.17157C19.5 6.34315 19.5 8.22876 19.5 12C19.5 15.7712 19.5 17.6569 18.3284 18.8284C17.1569 20 15.2712 20 11.5 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12ZM11.9801 8.42383C12.2983 8.68901 12.3413 9.16193 12.0762 9.48014L10.6013 11.25H12.5C12.791 11.25 13.0558 11.4183 13.1792 11.6819C13.3026 11.9454 13.2625 12.2566 13.0762 12.4801L10.5762 15.4801C10.311 15.7983 9.83807 15.8413 9.51986 15.5762C9.20165 15.311 9.15866 14.8381 9.42383 14.5199L10.8987 12.75H9C8.70899 12.75 8.44424 12.5817 8.32081 12.3181C8.19737 12.0546 8.23753 11.7434 8.42383 11.5199L10.9238 8.51986C11.189 8.20165 11.6619 8.15866 11.9801 8.42383Z" fill={props.firstPathFill}/>
            <path d="M21.25 14C21.25 14.4142 21.5858 14.75 22 14.75C22.4142 14.75 22.75 14.4142 22.75 14V10C22.75 9.58579 22.4142 9.25 22 9.25C21.5858 9.25 21.25 9.58579 21.25 10V14Z" fill={props.secondPathFill}/>
        </svg>
    )
}

function StopWatchComponent(){
    const [timer,setTimer] = useState(0);
    const [globalTimer,setGlobalTimer] = useState(0)
    const [pauseClick,setPauseClick] = useState(0)
    // const [pauseTime,setPauseTime] = useState(0)
    //const [idle,setIdle] = useState(false)

    let timerIdRef = useRef(null);
    let globalTimerIdRef = useRef(null);

    const handleEventOnClickStart = () =>{
        //console.log("Start Clicked", timer)
        timerIdRef.current = setInterval(()=>{
            //p("timer running ",timerIdRef.current)
            setTimer((prevState)=>(prevState + 1))
            // p("timer Id ref interval", globalTimerIdRef.current)
            // if(!globalTimerIdRef.current){
            //     clearInterval(globalTimerIdRef.current)
            // }
            
        },1000)
        // p("just after timer id ref ",globalTimerIdRef.current)
        if(!globalTimerIdRef.current){
        globalTimerIdRef.current = setInterval(()=>{
            setGlobalTimer((prevState) => (prevState + 1))
        },1000)
    }
        // p("Click Start over ", timerIdRef.current,globalTimerIdRef.current)
    }

    const handleEventOnClickPause =() =>{
       
        // p("paused",timerIdRef.current,globalTimerIdRef.current)
        if(timerIdRef.current){
            setPauseClick((prevState)=>(prevState+1))
            clearInterval(timerIdRef.current)
            // timerIdRef.current = null; // Clear reference
        }
        
        
        //setTimer(timer)
    }

    const handleEventOnClickReset =() =>{
        
        setTimer(0)
        setGlobalTimer(0)
        setPauseTime(0); // Reset pause time
        clearInterval(timerIdRef.current);
        clearInterval(globalTimerIdRef.current)
        // timerIdRef.current = null;
        // globalTimerIdRef.current = null;
    }

    const formatTime =(time) =>{
        const get_hours = time > 359999 ? `time0${Math.floor(time / 3600 )}`.slice(-3) : `time0${Math.floor(time / 3600 )}`.slice(-2)
        const get_minutes = `0${Math.floor((time%3600)/60)}`.slice(-2)
        const get_seconds = `0${(time%3600)%60}`.slice(-2)
        //const get_milli_seconds = `time0${Math.floor(time / 3600 )}`.slice(-3)
        //console.log(get_hours,get_minutes,get_seconds)
        return `${get_hours}:${get_minutes}:${get_seconds}`
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setPauseTime(globalTimer - timer);
    //     }, 1000); // Update every second

    //     return () => clearInterval(interval);
    // }, [globalTimer, timer]);
    return(


    <div className="relative flex flex-col justify-center items-center mt-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <div className="flex flex-row justify-around items-center border border-blue-500"> */}
            
            <div className="flex flex-col justify-content items-center">
                {/* <p className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">  HH:MM:SS:TT:CCC</p> */}
                <h5 className="mb-2 text-2xl bg-blue-100 rounded-lg p-2 font-bold tracking-tight text-gray-900 dark:text-white">{formatTime(globalTimer)}</h5>
                <h5 className="mb-2 p-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{formatTime(timer)}</h5>

            </div>
            

        {/* </div> */}
        
            
        
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
        <div>
            <button onClick={handleEventOnClickStart} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Start
                <FaPlay className="pl-2 h-4 w-4"/>
            </button>
            <button onClick={handleEventOnClickPause} className="inline-flex m-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Pause
                <FaPause className="pl-2 h-4 w-4"/>
                
            </button>
            <button onClick={handleEventOnClickReset} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Reset
                <FaArrowRotateLeft className="pl-2 h-6 w-6"/>
                {/* <LuTimerReset className="pl-2 h-6 w-6"/> */}
            </button>
            <div>
            {/* <PauseIcon fill="blue" stroke="red" classN="w-6 h-6"/>
            <BatteryChargeMinimalisticSolid mainFill="blue" firstPathFill="green" secondPathFill="red" classN="w-9 h-9"/> */}
    </div>
    <div className="flex flex-col justify-start">
            <div className=" p-2 bg-red-300">
                Pause Count : {pauseClick}
            </div>
            <div className="p-2 bg-red-300">
                Pause Time : {`${formatTime(globalTimer - timer)}`}
            </div>
    </div>

        </div>
        
    </div>

    )
}

export default StopWatchComponent;