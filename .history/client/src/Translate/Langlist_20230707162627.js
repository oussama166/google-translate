import React, { useEffect, useState } from 'react';
import data from './data.json';


function LangList() {
    const [getData, setData] = useState('');

    return (
        <div>
            <select name="data" id="data">
            {
                data.map((item, index) => {
                    
            }
            </select>
        </div>
    );
}

export default LangList;
