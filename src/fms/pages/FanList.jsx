import FanCard from "../components/fan/Fan";
import { FaCheck, FaTimes } from 'react-icons/fa';
import { SiJest } from 'react-icons/si';

function FanList(){
    return(
        <div>
             <FanCard status="PASS" icon={<FaCheck />} rotateClass="-rotate-12" />
            <FanCard status="PASS" icon={<FaCheck />} rotateClass="-rotate-6" />
            <FanCard status="JEST" icon={<SiJest />} rotateClass="rotate-0" />
            <FanCard status="FAIL" icon={<FaTimes />} rotateClass="rotate-6" />
            <FanCard status="FAIL" icon={<FaTimes />} rotateClass="rotate-12" />
        </div>
    )
}

export default FanList;