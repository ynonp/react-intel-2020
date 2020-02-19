// TS => TypeScript, TSX => TypeScript + XML
// JS => JavaScript, JSX => JavaScript + XML
import produce from 'immer';
import { createStore } from "redux";

let nextId = 2;

const initialState = {
  items: [
      { id: 0, name: 'Tomatoes', done: false },
      { id: 1, name: 'Pepper', done: true },
  ]
};

export type IDispatch = (_: IAction) => IAction;

export interface Item {
    name: string,
    done: boolean,
    id: number,
}

export interface IState {
    items: Item[],
}

type IAction =
    { type: '@@NEW_ITEM', payload: string } |
    { type: '@@TOGGLE_ITEM', payload: number } |
    { type: '@@DELETE_ITEM', payload: number }


function reducer(state: (IState|undefined) = initialState, action: IAction) {
    switch(action.type) {
        case '@@NEW_ITEM':
            return newItem(state, action);

        case '@@TOGGLE_ITEM':
            return toggleItem(state, action);

        case '@@DELETE_ITEM':
            return removeItem(state, action);

        default:
            return state;
    }
}

function newItem(state: IState = initialState, action: IAction ) {
    const { payload } = action;
    return produce(state, (draft) => {
        const newItem = {
            id: nextId++,
            name: String(payload),
            done: false,
        };
        draft.items.push(newItem);
    });
}

function removeItem(state: IState, { payload }: IAction ) {
    const id = payload;
    return {
        items: state.items.filter(item => item.id !== id),
    }
}

function toggleItem(state: IState, { payload }: IAction) {
    return produce(state, (draft) => {
        const id = Number(payload);
        const index = draft.items.findIndex(item => item.id === id);

        draft.items[index].done = !draft.items[index].done
    });
}

const store = createStore(reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

(window as any).store = store;
export default store;
