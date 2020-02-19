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

interface Item {
    name: string,
    done: boolean,
    id: number,
}

interface IState {
    items: Item[],
}

type IAction =
    { type: '@@NEW_ITEM', payload: string } |
    { type: '@@TOGGLE_ITEM', payload: number }


function reducer(state: (IState|undefined) = initialState, action: IAction): IState {
    switch(action.type) {
        case '@@NEW_ITEM':
            return newItem(state, action);

        case '@@TOGGLE_ITEM':
            return toggleItem(state, action);

        default:
            return state;
    }
}

function newItem(state: IState = initialState, action: IAction ) {
    const { payload } = action;
    return produce(state, (draft) => {
        const newItem = {
            name: String(payload),
            id: draft.items.length,
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
