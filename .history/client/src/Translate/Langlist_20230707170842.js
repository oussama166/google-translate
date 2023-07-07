import React, { useEffect, useState } from 'react';
import Select from 'react-tailwindcss-select';
import data from '../data.json';


function LangList() {
    function GetData() {
        let options = [];

        for (let i = 0; i < data["languages"].length; i++) {
            options.push(
                { value: data["languages"][i]["name"] }
            );
        }
        return options;
    }

    const [selected, setSelected] = useState(null);

    const handleChange = (e) => {
        setSelected(e.target.value);
    }
    return (

        <div>
            <Select
                options={GetData()}
                onChange={handleChange}

            />

        </div>
    );
}

export default LangList;
