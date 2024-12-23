import { useState } from "react";
import "./App.css";
import { Todos } from "./model";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todos[]>([]);
  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoList([...todoList, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <p className="heading">Taskify</p>
      <InputField todo={todo} setTodo={setTodo} handleChange={handleChange} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
