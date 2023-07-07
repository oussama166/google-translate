import React, { useEffect, useState } from 'react'

import { Client, Locale } from "appwrite";

//FIXME - this is not working
//SECTION - Get Languages

const [getData,SetData] = useState()
function GetLanguages() {
    useEffect(() => {
        const client = new Client();
        fetch(client.setEndpoint('https://cloud.appwrite.io/v1/locale/languages'))
            .then((response) => response.json())
            .then((json) => { 
                console.log(json); 
            })
            .catch((error) => { console.log(error); });
    }
    )
}
//!SECTION

function Langlist() {
    return (
        <div>
            <button onClick={GetLanguages}>Get Languages</button>

        </div>
    )
}

export default Langlist
