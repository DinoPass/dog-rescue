
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dogs() {
    const [data, setData] = useState({ dogs: [] });

    useEffect(() => {
        (async () => {
            const result = await axios.get(
                'http://localhost:3001/dogs',
            );
            setData(result.data);
        })();
    }, []);

    return (
        <div className='container'>
            <h1>This is the dogs page.</h1>
            <ul>
                {data.dogs.map(dog => (
                    <li key={dog._id}>
                        {dog.breed}
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default Dogs;    