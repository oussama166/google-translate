import React, { useEffect, useState } from 'react';
import data from '../data.json';


function LangList() {
    const [getData, setData] = useState('');

    return (
        <div>
            <select name="data" id="data">
                {
                    console.log(data)
                }
            </select>
        </div>
    );
}

export default LangList;
