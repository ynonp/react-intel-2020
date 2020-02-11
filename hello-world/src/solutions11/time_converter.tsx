import React, {useState} from "react";

function TimeInput(props: {
    seconds: number,
    factor: number,
    labelText: string,
    handleTextChanged: (_: React.ChangeEvent<HTMLInputElement>, __: number) => void,
}) {
    const { seconds, factor, handleTextChanged, labelText } = props;

    return (
        <label>
            {labelText}
            <input
                type="text"
                value={seconds / factor}
                onChange={(e) => handleTextChanged(e, factor)}
            />
        </label>

    )

}

export default function TimeConverter() {
    const [seconds, setSeconds] = useState<number>(0);

    function handleTextChanged(e: React.ChangeEvent<HTMLInputElement>, factor: number) {
        setSeconds(Number(e.target.value) * factor);
    }

    return (
        <div className="multi-input">
            <TimeInput
                seconds={seconds}
                factor={1}
                handleTextChanged={handleTextChanged}
                labelText={"Seconds: "}
            />

            <TimeInput
                seconds={seconds}
                factor={60}
                handleTextChanged={handleTextChanged}
                labelText={"Minutes: "}
            />

            <TimeInput
                seconds={seconds}
                factor={3600}
                handleTextChanged={handleTextChanged}
                labelText={"Hours: "}
            />

        </div>
    )
}