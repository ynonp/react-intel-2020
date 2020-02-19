import React from "react";
import {Item, IState, IDispatch} from "./redux/store";
import { connect } from "react-redux";

function getStateFromStore(state: IState) {
    return {
        items: state.items,
    }
}

function MyItem(props: {
    onClick: any,
    item: Item,
    onDelete: any,
}) {
    const { item, onClick, onDelete } = props;
    return (
        <label>
            <input
                type={"checkbox"}
                checked={item.done}
                onClick={onClick}
            />
            {item.name}
            <button onClick={onDelete}>X</button>
        </label>
    );
}

function ItemsList({ items, dispatch }: { items: Item[], dispatch: IDispatch }) {
    function clickedOnItem(id: number) {
        dispatch({
            type: "@@TOGGLE_ITEM",
            payload: id,
        });
    }

    function removeItem(id: number) {
        dispatch({
            type: '@@DELETE_ITEM',
            payload: id,
        })
    }

    return (
        <ul>
            {items.map((item, index) => (
                <li key={item.id}>
                    <MyItem
                        item={item}
                        onClick={() => clickedOnItem(item.id)}
                        onDelete={() => removeItem(item.id)}
                    />
                </li>
            ))}
        </ul>
    )
}

export default connect(getStateFromStore)(ItemsList);