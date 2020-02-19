// TS => TypeScript, TSX => TypeScript + XML
// JS => JavaScript, JSX => JavaScript + XML
import produce from 'immer';
import { createStore, applyMiddleware } from "redux";
import $ from 'jquery';

let nextId = 2;
let initialState: IState;

try {
    const state = localStorage.getItem('state');
    initialState = JSON.parse(state|| "")
} catch (err) {
    initialState = {
        items: [
            { id: 0, name: 'Tomatoes', done: false },
            { id: 1, name: 'Pepper', done: true },
        ],
        starwarsCharacter: {
            id: '1',
        },
    };
}

export type IDispatch = (_: IAction) => IAction;

export interface Item {
    name: string,
    done: boolean,
    id: number,
}

export interface IState {
    items: Item[],
    starwarsCharacter: {
        id: string,
        data?: any,
    }
}

type IAction =
    { type: '@@NEW_ITEM', payload: string } |
    { type: '@@TOGGLE_ITEM', payload: number } |
    { type: '@@DELETE_ITEM', payload: number } |
    { type: '@@DATA_LOADED', payload: any } |
    { type: 'load', payload: any }

interface IStore {
    getState: () => IState,
    dispatch: IDispatch,
}

const loggerMiddleware = (store: IStore) => (next: IDispatch) => (action: IAction) => {
    console.log('Logger Middleware :)');
    console.log(action);
    console.log('---');

    return next(action);
};

const storageMiddleware = (store: IStore) => (next: IDispatch) => (action: IAction) => {
    next(action);
    const nextState = store.getState();
    localStorage.setItem('state', JSON.stringify(nextState));
};

const starwarsMiddleware = (store: IStore) => (next: IDispatch) => (action: IAction) => {
    if (action.type === 'load') {
        const id = String(action.payload);
        $.getJSON(`https://swapi.co/api/people/${id}/`).then(function(data: any) {
            store.dispatch({ type: '@@DATA_LOADED', payload: data });
        });
    }
    return next(action);
};


function reducer(state: (IState|undefined) = initialState, action: IAction) {
    switch(action.type) {
        case '@@NEW_ITEM':
            return newItem(state, action);

        case '@@TOGGLE_ITEM':
            return toggleItem(state, action);

        case '@@DELETE_ITEM':
            return removeItem(state, action);

        case '@@DATA_LOADED':
            return setDataInStarwarsCharacter(state, action);

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
        starwarsCharacter: state.starwarsCharacter,
    }
}

function toggleItem(state: IState, { payload }: IAction) {
    return produce(state, (draft) => {
        const id = Number(payload);
        const index = draft.items.findIndex(item => item.id === id);

        draft.items[index].done = !draft.items[index].done
    });
}

function setDataInStarwarsCharacter(state: IState, { payload }: IAction ) {
    return {
        items: state.items,
        starwarsCharacter: {
            id: state.starwarsCharacter.id,
            data: payload,
        }
    }
}

const store = createStore(reducer, applyMiddleware(
    loggerMiddleware,
    storageMiddleware,
    starwarsMiddleware,
    ));
/*
const store = createStore(reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
*/

(window as any).store = store;
export default store;
