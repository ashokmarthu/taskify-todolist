import "./inputStyle.css";
import { Todo } from "../model";
const InputField = ({ todo, setTodo, handleChange }: Todo) => {
  return (
    <form className="input" onSubmit={handleChange}>
      <input
        value={todo}
        className="input_box"
        type="text"
        placeholder="Enter a text"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
