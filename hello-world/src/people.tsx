import React, {useState} from "react";
import Person from "./person";

export default function People() {
    const [ages, setAges] = useState([0, 5, 0, 10, 22, 1]);

    function growUp(index: number) {
        const newAges = [...ages];
        newAges[index] += 1;
        setAges(newAges);
    }

    const sum = ages.reduce((a, b) => a + b);

    return (
        <>
            <p>The sum of the ages is: {sum}</p>
            {
                ages.map((age, index) => (
                    <Person
                        key={index}
                        age={age}
                        growUp={() => growUp(index)}
                    />
                ))
            }
        </>
    )
}