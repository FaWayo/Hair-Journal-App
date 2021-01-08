import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Todo.css'



function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <Button variant="outline-primary" size="sm" onClick={() => completeTodo(index)}>completed</Button>
        <Button variant="outline-primary" size="sm" onClick={() => removeTodo(index)}>x</Button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button size="sm" onSubmit={handleSubmit}>Add</Button>
    </form>
  );
}

function ToDoo() {
  const [todos, setTodos] = React.useState([
    
    {
      text: "Night Routine Tomorrow",
      isCompleted: false
    },
    {
      text: "Trim Hair Next Week",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Card className="todo" style={{ width: '25rem' }}>
        <Card.Title className='head' className='text-center'>TO-DOs!</Card.Title>
      <div className="todo-list">
        <Card.Body>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo} completeTodo={completeTodo}
            
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
        </Card.Body>
      </div>
      </Card>
    </div>
  );
}



export default ToDoo;
