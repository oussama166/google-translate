import React, { useEffect, useState } from 'react';
import Select from 'react-tailwindcss-select';
import data from '../data.json';


function LangList() {
    const [getData, setData] = useState('');

    function GetData () {
        let options = [];

        for (let i = 0; i < data["languages"].length; i++) {
            options.psuh(
                {value : data["languages"][i]["language"], label : data["languages"][i]["language"]}
                );
        }

        consoel
    }


    return (
        <div>
        <Select  />
        </div>
    );
}

export default LangList;
