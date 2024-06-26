
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';

function PaginationComponent(props){
    // console.log(props);
    const currentPageNo = props.pageNo;
    

    return(
        <div className="w-full h-[5vh] mt-[3vh] bg-gray-400 flex justify-center items-center">
            
            <FaArrowLeftLong onClick={props.onPrevClick} className='mx-5 size-5 text-black-600 hover:cursor-pointer'/>
            {currentPageNo}
            <FaArrowRightLong onClick={props.onNextClick} className='mx-5 size-5 text-black-600 hover:cursor-pointer'/>
            


        </div>
    );
}

export default PaginationComponent;