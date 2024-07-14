import { useState,useEffect } from "react";
import axios from 'axios';

const fetchApiData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return null;
    }
};

const parseStructure = (data) => {
    if (Array.isArray(data)) {
        return data.length > 0 ? parseStructure(data[0]) : 'Empty array';
    } else if (typeof data === 'object' && data !== null) {
        return Object.keys(data).reduce((acc, key) => {
            acc[key] = parseStructure(data[key]);
            return acc;
        }, {});
    } else {
        return typeof data;
    }
};

const ApiStructureComponent = ({ apiUrl }) => {
    const [apiStructure, setApiStructure] = useState(null);

    useEffect(() => {
        const getApiStructure = async () => {
            const data = await fetchApiData(apiUrl);
            if (data) {
                const structure = parseStructure(data);
                setApiStructure(structure);
            }
        };

        getApiStructure();
    }, [apiUrl]);

    return (
        <div>
            <h1>API Structure</h1>
            {apiStructure ? (
                <pre>{JSON.stringify(apiStructure, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ApiStructureComponent;