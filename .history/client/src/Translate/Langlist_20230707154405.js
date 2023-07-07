import React, { useEffect, useState } from 'react';
import { Client } from 'appwrite';

function LangList() {
    const [getData, setData] = useState('');

    useEffect(() => {
        const client = new Client();
        client.setEndpoint('');

        fetch()
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <button>{getData}</button>
        </div>
    );
}

export default LangList;
