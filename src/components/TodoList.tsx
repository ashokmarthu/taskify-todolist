import "./inputStyle.css";
import { Todos } from "../model";
import SingleTodo from "./SingleTodo";
interface Props {
  todoList: Todos[];
  setTodoList: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const TodoList = ({ todoList, setTodoList }: Props) => {
  return (
    <div className="todo_list">
      {todoList.map((todo: Todos) => (
        <SingleTodo
          todoList={todoList}
          todo={todo}
          key={todo.id}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
};

export default TodoList;
