import { AiFillDelete, AiFillEdit, AiOutlineCheck } from "react-icons/ai";
import { Todos } from "../model";
import "./inputStyle.css";
import { useState } from "react";
interface Props {
  todo: Todos;
  todoList: Todos[];
  setTodoList: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const SingleTodo = ({ todo, setTodoList, todoList }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTodo, setIsEditTodo] = useState<string>(todo.todo);

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  const handleDone = (id: number) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleForm = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, todo: editTodo } : item
      )
    );
    setIsEdit(false);
  };
  return (
    <form
      className="todo_single"
      onSubmit={(e) => {
        handleForm(e, todo.id);
      }}
    >
      {isEdit ? (
        <input
          className="input_box--edit"
          type="text"
          value={editTodo}
          onChange={(e) => setIsEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todo_single--text">{todo.todo}</s>
      ) : (
        <span className="todo_single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!isEdit && !todo.isDone) setIsEdit(!isEdit);
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
        </span>
        <span className="icon">
          <AiOutlineCheck onClick={() => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
