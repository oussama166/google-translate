import React, { useEffect, useState } from 'react';
import Select from 'react-tailwindcss-select';
import data from '../data.json';


function LangList({ choise1, choise2, isPermute }) {
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
    const [selected2, setSelected2] = useState(null);

    const handleChange1 = value => {
        setSelected(value);
        choise1(value.label);
    };

    const handleChange2 = value => {
        setSelected2(value);
        choise2(value.label);
    };

    const permute = () => {
        let temp = selected;
        setSelected(selected2);
        setSelected2(temp);
    }


    return (
        <div className='w-1/2 flex flex-row gap-4 py-4'>
            <Select
                options={GetData()}
                onChange={handleChange1}
                value={(isPermute) ? permute() : selected}
                isSearchable={true}
            />
            <Select
                options={GetData()}
                onChange={handleChange2}
                value={(isPermute) ? permute() : selected2}
                isSearchable={true}
            />
        </div>
    );
}

export default LangList;
