import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ListGroup } from "react-bootstrap";

import Header from "./header";
import { blogActions } from "../store/actions/blogActions";
const Home = ({ blogs, history, getBlogs }) => {
  useEffect(() => {
    getBlogs();
  }, []);
  const onBtnClick = blg => {
    history.push({ pathname: "/blog", state: { blg } });
  };
  const blog = (blog, i) => {
    return (
      <ListGroup.Item
        action
        variant={i % 2 === 0 ? "secondary" : ""}
        onClick={() => onBtnClick(blog)}
      >
        <h3>{blog.title}</h3>
        <p>{blog.body}</p>
      </ListGroup.Item>
    );
  };
  return (
    <>
      <Header />
      <ListGroup>{blogs.map((blg, i) => blog(blg, i))}</ListGroup>
    </>
  );
};
const mapStateToProps = blogDetails => ({
  blogs: blogDetails.blogs || []
});

const mapDispatchToProps = {
  getBlogs: blogActions.getBlogs
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
