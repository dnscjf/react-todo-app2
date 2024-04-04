import { useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import { useRef } from "react";

const inistate = [
  {
    id: 1,
    text: "리액트의 기초 알아보기",
    checked: true, 
  },
  {
    id: 2,
    text: "컴포넌트의 이해",
    checked: false, 
  },
  {
    id: 3,
    text: "할 일 앱 만들어 보기",
    checked: true, 
  },
]

function App() {
  const [todos, setTodos] = useState(inistate);

  // id는 고유한 값이어야 한다.
  const nexid = useRef(4);

  // todos 배열에 새 객체 추가
  const oninsert = (text) => {
    const todo = {
      id: nexid.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nexid.current += 1;
  };

  // 삭제 기능
  const onremove = (id)=>{
    setTodos(todos.filter(todo => todo,id !== id));
  };

  // 토글 기능
  const ontoggle = (id) => {
    setTodos(
      todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo
        ),
    );
  };

  return (
    <TodoTemplate>
      <TodoInsert oninsert={oninsert} />
      <TodoList todos={todos} onremove={onremove} ontoggle={ontoggle}/>
    </TodoTemplate>
  );
}

export default App;