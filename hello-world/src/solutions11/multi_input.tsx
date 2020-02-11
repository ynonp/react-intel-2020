import React, {useState} from "react";

export default function MultiInput() {
    const [text, setText] = useState('');
    function handleTextChanged(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }

    return (
        <div className="multi-input">
            <input type="text" value={text} onChange={handleTextChanged}/>
            <input type="text" value={text} onChange={handleTextChanged}/>
            <input type="text" value={text} onChange={handleTextChanged}/>
            <input type="text" value={text} onChange={handleTextChanged}/>
            <input type="text" value={text} onChange={handleTextChanged}/>
        </div>
    )
}