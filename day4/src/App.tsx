import React from 'react';
import './App.css';

function TotalStuffTodo() {
    return <p>You have {5} things left to buy</p>
}

function NewItemBox() {
  return (
      <div className={"new-item-input"}>
          <input type={"text"} />
          <button>Add</button>
      </div>
  )
}

interface Item {
    name: string,
    id: number,
    done: boolean,
}

function ItemsList(props: { items: Item[] }) {
    const { items } = props;

    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <label>
                        <input type={"checkbox"} checked={item.done} />
                        {item.name}
                    </label>
                </li>
            ))}
        </ul>
    )
}

function App() {
    const items = [
        { id: 1, name: 'tomatoes', done: false },
        { id: 2, name: 'cucumber', done: true },
        { id: 3, name: 'bread', done: false },
    ];
  return (
    <div className="App">
        <NewItemBox/>
        <ItemsList items={items} />
        <TotalStuffTodo/>
    </div>
  );
}

export default App;
