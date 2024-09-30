import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoModel } from "./types/todoModel";
import "./App.css";
import { Todo } from "./components/Todo";

// ! build a todo app
// add todos and display them

const initialTodos: TodoModel[] = [
  { isDone: false, text: "Wash the dishes", id: Math.random() },
  { isDone: false, text: "Go for a run", id: Math.random() },
];

function App() {
  const [todos, setTodos] = useState<TodoModel[]>(initialTodos);

  // todo: add a new todo to the list of todos

  return (
    <div className="App">
      <h1>Todo Typescript React App</h1>

      {/* form to input new todos */}
      <TodoForm setTodos={setTodos} />

      {/* display for our todos */}
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default App;
