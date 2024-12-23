export interface Todo {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleChange: (e:React.FormEvent) => void;
}
export interface Todos {
  id: number;
  todo: string;
  isDone: boolean;
}
