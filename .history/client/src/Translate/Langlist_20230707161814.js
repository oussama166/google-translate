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
        let lang = getData["languages"]
        lang.map((item) => {
            return item
        })
        
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
