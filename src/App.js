import './App.css';
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import {useState} from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: false
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    }
  ])
  return <Template><TodoList todos={todos}></TodoList></Template>
}

export default App;
