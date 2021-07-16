export default function TodoForm({ addTodo }) {
  return (
    <form onSubmit={addTodo} className="App-Header_Form">
      <input
        type="text"
        id="todoItemInput"
        name="todoItemInput"
        placeholder="Type in your TODOS"
      />
      <button type="submit" className="AddTodoClick">
        Add
      </button>
    </form>
  );
}
