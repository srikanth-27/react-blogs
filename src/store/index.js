import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { blogDetails } from "./reducers/blogReducer";

const store = createStore(blogDetails, applyMiddleware(thunk));
export default store;
