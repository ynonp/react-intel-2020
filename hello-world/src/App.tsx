import React from 'react';
import './App.css';
import Person from "./person";
import MyInput from "./myinput";
import MultiInput from "./solutions11/multi_input";
import TimeConverter from "./solutions11/time_converter";
import NumberGuessingGame from "./solutions11/number_guessing_game";
import ColorPicker from "./solutions11/colorpicker";

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <ColorPicker/>
                <NumberGuessingGame/>
                <TimeConverter/>
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
