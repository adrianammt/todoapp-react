import "./App.css";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [todoListItems, setTodoListItems] = useState([]);
  //console.log(todoListItems);

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
      setTodoListItems(newTodoItems);
    } else {
      alert("Please type in a TODO!");
    }
    form.reset();
  }

  function handelOnclickDelete(id) {
    //console.log(id);
    const filterNotDeletedTodos = todoListItems.filter(
      (todo) => todo.id !== id
    );
    setTodoListItems(filterNotDeletedTodos);
  }

  function handelToggleStatus(id) {
    const toggleStatus = todoListItems.map((todo) => {
      console.log(todo.isComplete);
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      } else {
        return todo;
      }
    });
    setTodoListItems(toggleStatus);
  }

  function TodoListItems({ todo }) {
    //console.log(todo.isComplete);

    function handleOnClick() {
      handelOnclickDelete(todo.id);
    }

    function handleOnToggle() {
      handelToggleStatus(todo.id);
    }

    let toggleStatusClass;
    if (todo.isComplete) {
      toggleStatusClass = "Element-Status--Toggled";
    }

    let toggleStatusText;
    if (!todo.isComplete) {
      toggleStatusText = "Pending";
    } else {
      toggleStatusText = "Done";
    }

    return (
      <li className="List-Element">
        <p>{todo.name}</p>
        <button
          onClick={handleOnToggle}
          className={`Element-Status ${toggleStatusClass}`}
        >
          {toggleStatusText}
        </button>
        <button onClick={handleOnClick} className="Delete-Element">
          X
        </button>
      </li>
    );
  }

  const showTodos = todoListItems.map((newTodo) => {
    //console.log(newTodo);
    //console.log(newTodo.name);
    return (
      <TodoListItems
        key={newTodo.id}
        //todo={newTodo.name}
        todo={newTodo}
        //id={newTodo.id}
        //status={newTodo.isComplete}
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
