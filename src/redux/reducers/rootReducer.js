import filterReducer from "./filterReducer";
import productReducer from "./productReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    product: productReducer,
    filter: filterReducer,
});

export default rootReducer;