
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./todolist";
import { addTodo, deleteTodo, toggleDone, updateText } from "../slice";

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const text = useSelector((state) => state.todo.text);

  const handleText = (event) => {
    dispatch(updateText(event.target.value));
  };

  const handleClick = () => {
    if (text.trim()) {
      dispatch(
        addTodo({
          id: todos.length,
          title: text.trim(),
          done: false,
        })
      );
      dispatch(updateText(""));
    }
  };

  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo.id));
  };

  const handleDone = (todo) => {
    dispatch(toggleDone(todo.id));
  };

  return (
    <div style={{ display: "flex", marginLeft: 30 }}>
      <div>
        <input type="text" value={text} onChange={handleText} />
      </div>
      <div style={{ marginLeft: 5 }}>
        <TodoList
          todos={todos}
          handleClick={handleClick}
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
      </div>
    </div>
  );
}

export default Home;