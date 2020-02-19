import React from "react";
import {Item, IState, IDispatch} from "./redux/store";
import { connect } from "react-redux";

function getStateFromStore(state: IState) {
    return {
        items: state.items,
    }
}

function MyItem(props: {onDeleteItem:any,  onClick: any, item: Item, index: number }) {
    const { item, index, onClick, onDeleteItem } = props;
    return (
        <label>
            <input
                type={"checkbox"}
                checked={item.done}
                onClick={onClick}
            />
            {item.name}
            <button onClick={onDeleteItem}>X</button>
        </label>
    );
}

function ItemsList({ items, dispatch }: { items: Item[], dispatch: IDispatch }) {
    function clickedOnItem(index: number) {
        dispatch({
            type: "@@TOGGLE_ITEM",
            payload: index,
        });
    }

    function deleteItem(index:number){
        dispatch({
            type: "@@DELETE_ITEM",
            payload: index,
        });
    }

    return (
        <ul>
            {items.map((item, index) => (
                <li key={item.id}>
                    <MyItem
                        item={item}
                        index={index}
                        onClick={() => clickedOnItem(index)}
                        onDeleteItem={() => deleteItem(item.id)}
                    />
                </li>
            ))}
        </ul>
    )
}

export default connect(getStateFromStore)(ItemsList);