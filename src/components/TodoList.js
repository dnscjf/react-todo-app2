import TodoListItem from "./TodoListItem";
import "../styles/TodoList.scss";

const TodoList = ({ todos, onremove, ontoggle }) => {
  return (
    <div className="TodoList">

      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} onremove={onremove} ontoggle={ontoggle} />
      ))}
    </div>
  );
};

export default TodoList;
