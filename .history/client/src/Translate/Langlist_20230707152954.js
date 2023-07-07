import React, { useEffect, useState } from 'react'

import { Client, Locale } from "appwrite";

//FIXME - this is not working
//SECTION - Get Languages
    function GetLanguages() {
        useEffect(() => {
            const client = new Client();
            client
                .setEndpoint('http://localhost/v1') // Your API Endpoint
                .setProject('5f7d9b5b0a5c2') // Your project ID
                .setLocale(Locale.enUS); // Language code (default enUS)

        
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
