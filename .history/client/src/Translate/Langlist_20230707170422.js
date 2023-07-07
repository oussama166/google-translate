import React, { useEffect, useState } from 'react';
import Select from 'react-tailwindcss-select';
import data from '../data.json';


function LangList() {
    const [getData, setData] = useState('');
    const [getOptions, setOptions] = useState([]);

    let options = [];

    for (let i = 0; i < data["languages"].length; i++) {
        options.push(
            { value: data["languages"][i]["name"] }
        );
    }
    setOptions((prev) => [...prev, options])



    return (
        <div>
            <Select />

        </div>
    );
}

export default LangList;
