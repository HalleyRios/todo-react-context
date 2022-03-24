import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const TodoList = () => {
  return (
    <ListGroup className="mt-4">
      <ListGroupItem className="d-inline-flex align-items-center">
        <strong>Todo One</strong>
        <div className="ms-auto">
          <Link className="btn btn-warning me-2" to="/edit/1">
            Edit
          </Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};

export default TodoList;
