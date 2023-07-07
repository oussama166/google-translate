import React, { useEffect, useState } from 'react';
import { Client } from 'appwrite';

function LangList() {
    const [getData, setData] = useState('');

    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://cloud.appwrite.io/v1/locale/languages", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }, []);

    return (
        <div>
            <button>Hello world</button>
        </div>
    );
}

export default LangList;
