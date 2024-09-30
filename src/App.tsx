import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoModel } from "./types/todoModel";
import "./App.css";
import { Todo } from "./components/Todo";

const initialTodos: TodoModel[] = [
  { isDone: false, text: "Wash the dishes", id: Math.random() },
  { isDone: false, text: "Go for a run", id: Math.random() },
];

function App() {
  const [todos, setTodos] = useState<TodoModel[]>(initialTodos);

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id)); // Filter out the deleted todo
  };

  const handleEdit = (id: number, newText: string) => {
    setTodos((prev) => prev.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo // Update the todo with new text
    ));
  };

  return (
    <div className="App">
      <h1>Todo Typescript React App</h1>
      <TodoForm setTodos={setTodos} />
      {todos.map((todo) => {
        return (
          <Todo 
            key={todo.id} 
            todo={todo} 
            onDelete={handleDelete} 
            onEdit={handleEdit}    
          />
        );
      })}
    </div>
  );
}

export default App;
