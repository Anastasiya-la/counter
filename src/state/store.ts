import counterReducer from "./counter-reducer";
import {combineReducers, legacy_createStore as createStore} from "redux";
import {loadState, saveState} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({counter: store.getState().counter})
})

export type AppType = ReturnType<typeof rootReducer>
//@ts-ignore
window.store = store