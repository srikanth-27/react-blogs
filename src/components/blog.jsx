import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button, ListGroup } from "react-bootstrap";

import { blogActions } from "../store/actions/blogActions";
import Header from "./header";
const blog = ({ comments, location, getCommentsById }) => {
  const { state: { blg } = {} } = location;
  const getComments = () => {
    getCommentsById(blg.id);
  };
  return (
    <div>
      <Header title={blg && blg.title} />
      <div className="d-flex m-3 ml-5 pl-5">
        <Link to="/" className="text-decoration-none">
          <i class="bi bi-arrow-left" />
          &nbsp;&nbsp;go back
        </Link>
      </div>
      <Card className="m-3">
        <Card.Body>
          <Card.Title>Title : {blg && blg.title}</Card.Title>
          <Card.Text>{blg && blg.body}</Card.Text>
          <Button onClick={getComments}>Comment's</Button>
        </Card.Body>
      </Card>
      <ListGroup className="m-5">
        {comments.map((cmt) => (
          <ListGroup.Item variant="secondary" className="my-2">
            <h5>Name : {cmt.name}</h5>
            <h6>Email : {cmt.email}</h6>
            <p>comment : {cmt.body}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = (state) => ({
  comments: state.comments || [],
});

const mapDispatchToProps = {
  getCommentsById: blogActions.getCommentsById,
};

export default connect(mapStateToProps, mapDispatchToProps)(blog);
