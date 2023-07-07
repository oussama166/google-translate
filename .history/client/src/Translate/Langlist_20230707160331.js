import React, { useEffect, useState } from 'react';


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

    function getLang() {
        for (let i = 0; i < getData["languages"].length; i++) {
            
                console.log(getData["languages"][i]["name"])
            
        }
    }
    return (
        <div>
            {
                getLang()
            }
        </div>
    );
}

export default LangList;
