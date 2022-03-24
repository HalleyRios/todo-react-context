import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const TodoListHeader = () => {
  return (
    <Navbar color="dark" dark>
      <NavbarBrand>Todo List</NavbarBrand>
      <Nav>
        <NavItem>
          <Link className="btn btn-primary" to="/add">
            Add Todo
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default TodoListHeader;
