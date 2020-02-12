import React from 'react';
import './App.css';
import Person from "./person";
import MyInput from "./myinput";
import MultiInput from "./solutions11/multi_input";
import TimeConverter from "./solutions11/time_converter";
import NumberGuessingGame from "./solutions11/number_guessing_game";
import ColorPicker from "./solutions11/colorpicker";
import People from "./people";
import List from "./simple_person";
import EffectsDemo from "./effects/effects_demo";
import ImageSlider from "./codeshare/containers_demo";
import ClassDemo from "./class_components/class_components";
import FnDemo from "./class_components/function_component";
function StringListItem(props: { item: string }) {
    const { item } = props;
    return <li>{item}</li>
}

function NumberListItem(props: { item: number}) {
    const { item } = props;
    return <li>{item}</li>
}

function App() {
    const items = ['10', '20', '30', '40'];
    return (
        <div className="App">
            {/*<ImageSlider>*/}
                {/*<img src="https://robohash.org/one" />*/}
                {/*<p>Wow it's a text</p>*/}
                {/*<img src="https://robohash.org/three" />*/}
                {/*<img src="https://robohash.org/four" />*/}
            {/*</ImageSlider>*/}
            <FnDemo/>
            <hr />
            <ClassDemo/>
        </div>
    );
}

export default App;
