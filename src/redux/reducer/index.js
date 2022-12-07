import handleCart from "./handleCart";
import { combineReducers } from "redux";
import handleAuth from "./handleAuth";
import handleSetUser from './handleSetUser';
import handleTotal from './handleTotal'


const rootReducers = combineReducers({
    handleCart,
    handleAuth,
    handleSetUser,
    handleTotal
});


export default rootReducers;