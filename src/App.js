import "./App.css";

/*<header>
  <form>
    <input></input>
    <button></button>
  <form/>

  TodoElements =
  {
    isTodoDeleted: false(default)
    name:TodoName
    todoStatus: pending(default)
  }
*/

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <form className="App-Header_Form">
          <input
            type="text"
            id="AppInput"
            name="AppInput"
            placeholder="Type in your TODO"
          ></input>
          <button className="AddTodoClick">Add</button>
        </form>
      </header>
      <main className="App-Content">
        <ul className="ListHolder">
          <li className="List-Element">
            <button className="Delete-Element">X</button>
            <p>Do my App</p>
            <button className="Element-Status">Pending</button>
          </li>
        </ul>
      </main>
      <footer className="App-Footer">
        <p className="App-Footer_Quote">Made with 💙 by Adriana</p>
      </footer>
    </div>
  );
}

export default App;
