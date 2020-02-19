// TS => TypeScript, TSX => TypeScript + XML
// JS => JavaScript, JSX => JavaScript + XML
import produce from 'immer';
import { createStore } from "redux";

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
    { type: '@@REMOVE_ITEM', payload: number}


function reducer(state: (IState|undefined) = initialState, action: IAction) {
    switch(action.type) {
        case '@@NEW_ITEM':
            return newItem(state, action);

        case '@@TOGGLE_ITEM':
            return toggleItem(state, action);
        case '@@REMOVE_ITEM':
            return removeItem(state,action);
        default:
            return state;
    }
}

function removeItem(state: IState, { payload }: IAction) {
    return {items: state.items.filter(x=>x.id != Number(payload))}
}

function newItem(state: IState = initialState, action: IAction ) {
    const { payload } = action;
    return produce(state, (draft) => {
        const newItem = {
            id: draft.items.length,
            name: String(payload),
            done: false,
        };
        draft.items.push(newItem);
    });
}

function toggleItem(state: IState, { payload }: IAction) {
    return produce(state, (draft) => {
        const index = Number(payload);
        draft.items[index].done = !draft.items[index].done
    });
}

const store = createStore(reducer);

(window as any).store = store;
export default store;
