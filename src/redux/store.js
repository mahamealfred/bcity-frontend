import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import allReducers from "./reducers";




const middleware=applyMiddleware(thunk, promise);

export const store=createStore(allReducers, {}, composeWithDevTools(middleware));
//export const store=createStore(allReducers, {}, middleware);