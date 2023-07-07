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
        
        for(var i=0;i<getData.length;i++){
            <option value={getData[i].$id}>{getData[i].name}</option>
        }
    }
    return (
        <div>
            <select name="data" id="data">
            {
                getLang()
            }
            </select>
        </div>
    );
}

export default LangList;
