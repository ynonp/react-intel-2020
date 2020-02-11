import React from 'react';
import './App.css';
import Person from "./person";
import MyInput from "./myinput";

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <MyInput/>
                <Person name={"bob"} initialAge={19} />
                <Person name="jim"   initialAge={32} />
                <Person name="jane"  initialAge={5} />
                <p>
                    Hello World
                </p>
            </div>
        </div>
    );
}

export default App;
