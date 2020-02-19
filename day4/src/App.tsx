import React, {useState} from 'react';
import produce from 'immer';
import './App.css';
import store, { IState, Item } from "./redux/store";
import { Provider, connect } from "react-redux";

import NewItemBox from "./new_item_box";
import ItemsList from "./items_list";
import TotalStuffTodo from "./total_stuff_todo";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <NewItemBox />
                <ItemsList />
                <TotalStuffTodo />
            </div>
        </Provider>
    );
}

export default App;
