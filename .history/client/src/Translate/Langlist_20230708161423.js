import React, { useState } from 'react';
import Select from 'react-tailwindcss-select';
import data from '../data.json';

function LangList({ choise1, choise2, Permute }) {
    function GetData() {
        let options = [];

        for (let i = 0; i < data["languages"].length; i++) {
            options.push({
                value: data["languages"][i]["code"],
                label: `${data["languages"][i]["flag"]}     ${data["languages"][i]["name"]}` || data["languages"][i]["name"]
            });
        }
        return [options, options[Math.floor(Math.random() * options.length), options[Math.floor(Math.random() * options.length)]]];
    }

    const [selected, setSelected] = useState(null);
    const [selected2, setSelected2] = useState(null);

    const handleChange1 = value => {
        setSelected(value);
        choise1(value.label);
    };

    const handleChange2 = value => {
        setSelected2(value);
        choise2(value.label);
    };

    // Permute

    const LetPermute = () => {
        let temp = selected;
        setSelected(selected2);
        setSelected2(temp);
    };

    if (Permute === true) {
        LetPermute();
    }

    return (
        <div className='w-1/2 flex flex-row gap-4 py-4 relative '>
            <Select
                options={GetData()[0]}
                onChange={handleChange1}
                value={selected}
                isSearchable={true}
            />
            <Select
                options={GetData()[0]}
                onChange={handleChange2}
                value={selected2}
                isSearchable={true}
            />
        </div>
    );
}

export default LangList;
