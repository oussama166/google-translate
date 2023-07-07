import React, { useEffect, useState } from 'react'

import { Client, Locale } from "appwrite";

//FIXME - this is not working
//SECTION - Get Languages
    function GetLanguages() {
        useEffect(() => {
            const client = new Client();
            client.setEndpoint('https://cloud.appwrite.io/v1/locale/languages') // Your API Endpoint
                .setProject('5f7d9b5b0a5c2') // Your project ID
        
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
