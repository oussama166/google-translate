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
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.log('error', error));
    }, []);

    function ShowDATA (){
        console.log(getData)
        for (const items in getData) {
            console.log(getData[items])
        }
    }

    return (
        <div>
            {ShowDATA}
        </div>
    );
}

export default LangList;
