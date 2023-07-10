import React, { useState } from 'react';
import Select from 'react-tailwindcss-select';
import data from '../data.json';


function LangList({ choise1, choise2, Permute, isHide, takeLang, isOpen1, isOpen2 }) {
    function GetData() {
        let options = [];

        for (let i = 0; i < data["languages"].length; i++) {
            options.push(
                {
                    value: data["languages"][i]["code"],
                    label: `${data["languages"][i]["flag"]}     ${data["languages"][i]["name"]}` || data["languages"][i]["name"],
                    checked: false
                }
            );
        }
        return [options, options[Math.floor(Math.random() * options.length), options[Math.floor(Math.random() * options.length)]]];
    }

    const [selected, setSelected] = useState(null);
    const [selected2, setSelected2] = useState(null);

    const handleChange1 = value => {
        setSelected(value);
        choise1(value.label);
        takeLang(prevState => {
            const { from: _, ...rest } = prevState; // Destructure "from" property and ignore it
            return { ...rest, from: value.code || "en" };
        })
    };

    const handleChange2 = value => {
        setSelected2(value);
        choise2(value.label);
        takeLang(prevState => {
            const { to: _, ...rest } = prevState; // Destructure "from" property and ignore it
            return { ...rest, to: value.code || "es" }
        })
    };

    //FIXME - Fixe the permute

    //SECTION - Permute
    const LetPermute = () => {
        // let temp = selected;
        // setSelected(selected2);
        // setSelected2(temp);
        console.log("is Permute");
    }
    //!SECTION - Permute


    return (
        <div
            className={`w-1/2 flex-row gap-4 pt-0 pb-4 relative ${(isHide === true) ? 'hidden' : 'flex'} `}>
            <Select
                options={GetData()[0]}
                onChange={handleChange1}
                value={selected}
                isSearchable={true}
            />

            <Select
                options={GetData()[0]}
                onChange={handleChange2}
                value={(Permute === true) ? LetPermute() : selected2}
                isSearchable={true}
            />
        </div>
    );
}

export default LangList;
