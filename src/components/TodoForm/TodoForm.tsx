import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

interface TodoProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onSubmit?: (value: string) => void;
}

const TodoForm = (props: TodoProps) => {
  const { label, placeholder, value, onSubmit } = props;

  const handleSubmit = (value: string) => {
    onSubmit && onSubmit(value);
  };

  return (
    <Form onSubmit={() => handleSubmit('')}>
      <FormGroup>
        <Label htmlFor="todo-input">{label ? label : 'Todo'}</Label>
        <Input
          id="todo-input"
          placeholder={placeholder || 'Enter Todo'}
          type="text"
          value={value || ''}
        />
      </FormGroup>
      <FormGroup>
        <Button type="submit">Save</Button>
        <Link className="btn btn-danger mx-2" to="/">
          Cancel
        </Link>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
