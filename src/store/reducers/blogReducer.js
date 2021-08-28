import { GET_ALL_BLOGS, GET_COMMENTS_BY_ID } from "../actions/blogActions";
const initialState = {
  blogs: [],
  comments: []
};
export function blogDetails(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BLOGS:
      return { ...state, blogs: action.res, comments: [] };
    case GET_COMMENTS_BY_ID:
      return { ...state, comments: action.res };

    default:
      return state;
  }
}
