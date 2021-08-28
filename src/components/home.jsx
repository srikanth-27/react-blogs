import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { InputGroup, FormControl, ListGroup } from "react-bootstrap";

import Header from "./header";
import { blogActions } from "../store/actions/blogActions";
const Home = ({ blogs, history, getBlogs }) => {
  const [blgs, setBlgs] = useState(blogs);
  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    setBlgs(blogs);
  }, [blogs]);

  const onBtnClick = blg => {
    history.push({ pathname: "/blog", state: { blg } });
  };

  const onSearch = txt => {
    const filteredBlogs = blogs.filter(blg => blg.title.includes(txt));
    setBlgs(filteredBlogs);
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
      <InputGroup className="m-3 w-25">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <FormControl
          placeholder="Search Title"
          aria-label="Search Title"
          aria-describedby="basic-addon1"
          onChange={e => onSearch(e.target.value)}
        />
      </InputGroup>
      <br />
      <ListGroup className="mx-3">
        {blgs.map((blg, i) => blog(blg, i))}
      </ListGroup>
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
