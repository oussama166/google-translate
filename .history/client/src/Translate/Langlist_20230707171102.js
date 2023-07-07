import React, { useEffect, useState } from 'react';
import Select from 'react-tailwindcss-select';
import data from '../data.json';


function LangList() {
    function GetData() {
        let options = [];

        for (let i = 0; i < data["languages"].length; i++) {
            options.push(
                {
                    value: data["languages"][i]["code"],
                    label: data["languages"][i]["name"]
                }
            );
        }
        return options;
    }

    const [selected, setSelected] = useState(null);

    const handleChange = value => {
        console.log("value:", value);
        setSelected(value);
    };
    return (

        <div>
            <Select
                options={GetData()}
                onChange={handleChange}
                value={selected}
            />

        </div>
    );
}

export default LangList;
