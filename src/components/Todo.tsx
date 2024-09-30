import { TodoModel } from "../types/todoModel";

interface TodoProps {
  todo: TodoModel;
}

export const Todo = ({ todo }: TodoProps) => {
  const { id, isDone, text } = todo;
  return (
    <div className="container" key={id}>
      <p>{text}</p>
      <p>Completed: {`${isDone}`}</p>
    </div>
  );
};
