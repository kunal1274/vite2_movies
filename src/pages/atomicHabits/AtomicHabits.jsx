import { Link } from 'react-router-dom';
import '../../index.css';

function AtomicHabitsHomePage(){
    return(
        // main container
    <div className='border border-black-400'
    style={{
        backgroundColor:"#F9F8F4",
        height:"50vh"
    }}
    >
        <div className="border border-red-200 mx-80">
        {/* top navbar */}
        <div className="border border-blue-200 m-2 px-2 flex flex-row justify-between items-center hover:cursor-pointer"
            
        >
            <div className='underline-animation font-bold '>KUNAL KUMAR</div>
            <div className="border border-gray-200 m-2 px-2 flex flex-row justify-start space-x-3">
                <div className='underline-animation '>Home</div>
                <div className='underline-animation '>
                    <Link to="/blog">Blogs</Link>
                </div>
                <div className='underline-animation '>Patterns</div>
                <div className='underline-animation '>Chat</div>
                <div className='underline-animation '>Exercise</div>
            </div>
            <div className='underline-animation font-bold '>
                ABOUT
            </div>

        </div>
        <div>I am Atomic Habits</div>
    </div>

    </div>
    
    )
}

export default AtomicHabitsHomePage;