import React, {useState} from "react";
import Person from "./person";

export default function People() {
    const [ages, setAges] = useState([0, 5, 0, 0]);

    function growUp(index: number) {
        const newAges = [...ages];
        newAges[index] += 1;
        setAges(newAges);
    }

    const sum = ages.reduce((a, b) => a + b);

    return (
        <>
            <p>The sum of the ages is: {sum}</p>
            <Person age={ages[0]} growUp={() => growUp(0)} />
            <Person age={ages[1]} growUp={() => growUp(1)} />
            <Person age={ages[2]} growUp={() => growUp(2)} />
            <Person age={ages[3]} growUp={() => growUp(3)} />
        </>
    )
}