import React, { useEffect, useState } from 'react';
import Selct from 'react-tailwindcss-select';
import data from '../data.json';


function LangList() {
    const [getData, setData] = useState('');


    return (
        <div>
            
                <option value="Auto" defaultChecked>Auto Detect</option>
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
