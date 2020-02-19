import React from "react";
import { IState, Item } from "./redux/store";
import { connect } from "react-redux";

function getStateFromProps(state: IState) {
    return {
        items: state.items,
    }
}

function TotalStuffTodo(props: { items: Item[] }) {
    const { items } = props;
    const undone = items.filter(item => !item.done).length;

    return <p>You have {undone} things left to buy</p>
}

export default connect(getStateFromProps)(TotalStuffTodo);
