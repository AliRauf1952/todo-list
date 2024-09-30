import { FormEvent, useRef } from "react";
import { TodoModel } from "../types/todoModel";

interface TodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

export const TodoForm = ({ setTodos }: TodoFormProps) => {
  const todoInputRef = useRef<HTMLInputElement>();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setTodos((prev) => {
      return [
        ...prev,
        { isDone: false, id: Math.random(), text: todoInputRef.current.value },
      ];
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Todo text..." ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
