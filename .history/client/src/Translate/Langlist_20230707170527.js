import React, { useEffect, useState } from 'react';
import Select from 'react-tailwindcss-select';
import data from '../data.json';


function LangList() {
    const [getData, setData] = useState('');
    function GetData() {
        let options = [];

        for (let i = 0; i < data["languages"].length; i++) {
            options.push(
                { value: data["languages"][i]["name"] }
            );
        }
        return options;
    }


    return (
        <div>
            <Select options={GetData()}/>

        </div>
    );
}

export default LangList;
