import React, { useEffect, useState } from 'react';
import data from '../data.json';


function LangList() {
    const [getData, setData] = useState('');

    return (
        <div>
            <select name="data" id="data">
                {
                    data["languages"].map((item, index) => {
                        return (
                            <option key={index} value={item.code}>{item.name}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}

export default LangList;
