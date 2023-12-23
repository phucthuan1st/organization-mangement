import { combineReducers } from "redux";

import adminReducer from "./admin";
import authReducer from "./auth";
import userReducer from "./user";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    admin: adminReducer,
});

export default rootReducer;