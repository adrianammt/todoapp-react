import "./App.css";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [todoListItems, setTodoListItems] = useState([]);
  console.log(todoListItems);
  function handleSubmit(event) {
    console.log("works");

    event.preventDefault();
    const form = event.target;
    const input = form.todoItemInput;
    const newTodo = input.value;
    if (newTodo) {
      const newTodoItems = [
        ...todoListItems,
        {
          name: newTodo,
          id: Math.floor(Math.random() * 1000),
          isComplete: false,
        },
      ];
      console.log("Hola");
      setTodoListItems(newTodoItems);
    } else {
      alert("Please type in a TODO!");
    }
    form.reset();
  }

  function TodoListItems({ showTodos, todo, status }) {
    return (
      <li className="List-Element">
        <p>{todo}</p>
        <button className="Element-Status">Pending</button>
        <button className="Delete-Element">X</button>
      </li>
    );
  }
  const showTodos = todoListItems.map((newTodo, index) => {
    console.log(newTodo);
    console.log(newTodo.name);
    return (
      <TodoListItems
        key={index}
        todo={newTodo.name}
        status={newTodo.isComplete}
      />
    );
  });

  //==================App Begin
  return (
    <div className="App">
      <header className="App-Header">
        <TodoForm addTodo={handleSubmit} />
      </header>
      <main className="App-Content">{showTodos}</main>
    </div>
  );
}
//==================App End

export default App;
