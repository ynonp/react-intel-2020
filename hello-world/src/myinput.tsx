import React, { useState } from "react";

export default function MyInput() {
    const [text, setText] = useState('');

    function handleTextChanged(
        ev: React.ChangeEvent<HTMLInputElement>) {
        const textInTheBox = ev.target.value;
        setText(textInTheBox);
    }

    return (
        <div>
            <p>Length: {text.length}</p>
            <input
                type="text"
                value={text}
                onChange={handleTextChanged}
            />
        </div>
    )
}