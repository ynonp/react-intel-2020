import React from "react";
// person.tsx => TypeScript Component

export default function Person(props: {
    name: string,
    initialAge: number,
}) {
    const { name, initialAge } = props;
    const [age, setAge] = React.useState(initialAge);

    function growUp() {
        setAge(age + 1);
    }

    const canText = age >= 18 ? "can" : "can't";
    return (
        <div className="person">
            <p>Hi! I'm a person my name is {name}</p>
            <p>I {canText} vote</p>
            <p>I am {age} years old</p>
            <button onClick={growUp}>Grow Up</button>
        </div>
    )
}