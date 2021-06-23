import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { rootReducer } from "./reducerCombiner";


export const store = createStore(rootReducer,devToolsEnhancer())