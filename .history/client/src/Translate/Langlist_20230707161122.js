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
        let arr = [];
        console.log(getData["languages"])
        console.log(arr)
        for (var i = 0; i < getData["languages"].length; i++) {
            arr.push(`<option value=${getData["languages"][i][id]}>${getData["languages"][i].name}</option>`)
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
