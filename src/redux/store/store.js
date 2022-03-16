import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import Reducer from "../reducers/Reducer";

const store=createStore(Reducer,composeWithDevTools(applyMiddleware(thunk)))
export default store