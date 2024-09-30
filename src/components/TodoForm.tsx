import { FormEvent, useRef } from "react";
import { TodoModel } from "../types/todoModel";

interface TodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

export const TodoForm = ({ setTodos }: TodoFormProps) => {
  // Changed: Provide initial value for useRef
  const todoInputRef = useRef<HTMLInputElement>(null); 

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Added check for null to avoid potential errors
    if (todoInputRef.current) { 
      setTodos((prev) => [
        ...prev,
        { isDone: false, id: Math.random(), text: todoInputRef.current.value },
      ]);
      // Added: Clear the input field after adding a todo
      todoInputRef.current.value = ''; 
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Todo text..." ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
