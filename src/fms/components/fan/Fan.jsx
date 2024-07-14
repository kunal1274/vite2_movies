import React from 'react';
// import { FaCheck, FaTimes } from 'react-icons/fa';
// import { SiJest } from 'react-icons/si';

const FanCard = ({ status, icon, rotateClass }) => {
    const statusColor = status === 'PASS' ? 'bg-green-500' : 'bg-red-500';
    const iconColor = status === 'PASS' ? 'text-green-500' : 'text-red-500';
    // const rotateClass = status === 'PASS' ? 'rotate-6' : 'rotate-12';

    return (
        <div className={`inline-block m-4 w-40 h-64 border border-gray-200 rounded-lg shadow-md overflow-hidden transform ${rotateClass}`}>
            <div className={`${statusColor} text-white p-2 text-center`}>
                {status}
            </div>
            <div className="p-4 text-center">
                <div className={`${iconColor} text-4xl mb-4`}>
                    {icon}
                </div>
                <div className="space-y-2">
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">GET STARTED</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">DOCS</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">CONFIG</button>
                </div>
            </div>
        </div>
    );
};

export default FanCard;
