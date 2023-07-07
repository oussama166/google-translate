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
    

    return (
        <div>
            <select name="data" id="data">
                {
                    getData.languages.map((item, index) =>  `<option value={item.name} >{item.name}</option>
                }
            </select>
        </div>
    );
}

export default LangList;
