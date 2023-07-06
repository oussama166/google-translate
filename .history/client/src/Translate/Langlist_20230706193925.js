import React, { useState } from 'react'

import { Client, Locale } from "appwrite";

//FIXME - this is not working
//
function GetLanguages() {
    const [languages, setLanguages] = useState([]);

    const client = new Client();

    const locale = new Locale(client);

    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('5df5acd0d48c2') // Your project ID
        ;

    const promise = locale.listLanguages();

    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
}


function Langlist() {
    return (
        <div>
            <button onClick={GetLanguages}>Get Languages</button>
        </div>
    )
}

export default Langlist
