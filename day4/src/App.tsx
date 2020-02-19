import React, {useState} from 'react';
import produce from 'immer';
import './App.css';
import "./redux/store";

interface Item {
    name: string,
    id: number,
    done: boolean,
}

function TotalStuffTodo(props: { items: Item[] }) {
    const { items } = props;
    const undone = items.filter(item => !item.done).length;

    return <p>You have {undone} things left to buy</p>
}

function NewItemBox(props: { addItem: (_:string) => void}) {
    const { addItem } = props;
    const [ text, setText ] = useState('');

    return (
        <div className={"new-item-input"}>
            <input type={"text"} value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => addItem(text)}>Add</button>
        </div>
    )
}

function Item(props: { item: Item, toggleItem: (index: number) => void, index: number }) {
    const { item, toggleItem, index } = props;
    return (
        <label>
            <input
                type={"checkbox"}
                checked={item.done}
                onChange={() => toggleItem(index)}
            />
            {item.name}
        </label>
    );
}

function ItemsList(props: { items: Item[], toggleItem: (index: number) => void }) {
    const { items, toggleItem } = props;

    return (
        <ul>
            {items.map((item, index) => (
                <li key={item.id}>
                    <Item item={item} toggleItem={toggleItem} index={index} />
                </li>
            ))}
        </ul>
    )
}
const initialItems: Item[] = [
];

function App() {
    const [items, setItems] = useState(initialItems);

    function addItem(name: string) {
        setItems(val => produce(val, draft => {
            // Run your mutable code on draft => and get Immutable behaviour
            draft.push({ name, id: items.length, done: false });
        }));
    }

    function toggleItem(index: number) {
        setItems(val => produce(val, draft => {
            draft[index].done = !draft[index].done;
        }));
    }

    return (
        <div className="App">
            <NewItemBox addItem={addItem} />
            <ItemsList items={items} toggleItem={toggleItem} />
            <TotalStuffTodo items={items}/>
        </div>
    );
}

export default App;
