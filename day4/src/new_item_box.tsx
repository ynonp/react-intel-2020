import React, {useState} from "react";
import { connect } from "react-redux";
import { IState, Item, IDispatch } from "./redux/store";

function NewItemBox({ dispatch }: { dispatch: IDispatch }) {
    const [ text, setText ] = useState('');

    return (
        <div className={"new-item-input"}>
            <input type={"text"} value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => dispatch({
                type: '@@NEW_ITEM',
                payload: text,
            })}>Add</button>
        </div>
    )
}

function getStateFromStore(state: IState) {
    return {
    }
}

export default connect(getStateFromStore)(NewItemBox);
