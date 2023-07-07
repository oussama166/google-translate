import React, { useEffect, useState } from 'react'

import { Client, Locale } from "appwrite";

//FIXME - this is not working
//SECTION - Get Languages
    function GetLanguages() {
        useEffect(() => {
            const client = new Client();
            fetchclient.setEndpoint('https://cloud.appwrite.io/v1/locale/languages')
        
    }
//!SECTION

function Langlist() {
    const [languages, setLanguages] = useState([]);
    return (
        <div>
            <button onClick={GetLanguages}>Get Languages</button> 

        </div>
    )
}

export default Langlist
