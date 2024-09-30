import { TodoModel } from "../types/todoModel";

interface TodoProps {
  todo: TodoModel;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

export const Todo = ({ todo, onDelete, onEdit }: TodoProps) => {
  const { id, isDone, text } = todo;

  const handleEdit = () => {
    const newText = prompt("Edit your todo:", text);
    if (newText && newText.trim() !== "") {
      onEdit(id, newText);
    }
  };

  return (
    <div className="container" key={id}>
      <p>{text}</p>
      <p>Completed: {`${isDone}`}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
