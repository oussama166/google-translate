import React, { useState } from 'react'

import { Client, Locale } from "appwrite";

//FIXME - this is not working
//SECTION - Get Languages
    function GetLanguages() {
        

        
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
