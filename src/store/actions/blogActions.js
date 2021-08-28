export const GET_ALL_BLOGS = "GET_ALL_BLOGS";
export const GET_COMMENTS_BY_ID = "GET_COMMENTS_BY_ID";

export const blogActions = {
  getBlogs: () => async dispatch => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    dispatch({
      type: GET_ALL_BLOGS,
      res: data
    });
  },
  getCommentsById: id => async dispatch => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const data = await res.json();
    dispatch({
      type: GET_COMMENTS_BY_ID,
      res: data
    });
  }
};
