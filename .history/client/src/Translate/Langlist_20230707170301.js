import React, { useEffect, useState } from 'react';
import Select from 'react-tailwindcss-select';
import data from '../data.json';


function LangList() {
    const [getData, setData] = useState('');
    const [getOptions, setOptions] = useState([]);
    function GetData () {
        let options = [];

        for (let i = 0; i < data["languages"].length; i++) {
            options.push(
                {value : data["languages"][i]["name"]}
                );
        }
        setOptions((prev)=>[...pre])
        
    }


    return (
        <div>
        {/* <Select  /> */}
        {GetData()}
        </div>
    );
}

export default LangList;
