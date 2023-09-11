import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/slice/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("State", state);
  if (state.todo.isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <div className="App">
        <h1>TodoList Using Redux Thunk</h1>
        <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>

        <ul className="list-group list-group-horizontal">
          <li className="list-group-item list-group-item-action list-group-item-warning">
            Id
          </li>
          <li className="list-group-item list-group-item-action list-group-item-info">
            Title
          </li>
          <li className="list-group-item list-group-item-action list-group-item-success">
            User-Id
          </li>
        </ul>
        {state.todo.data &&
          state.todo.data.slice(0, 10).map((e) => (
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item list-group-item-action list-group-item-warning">
                {e.id}
              </li>
              <li className="list-group-item list-group-item-action list-group-item-info">
                {e.title}
              </li>
              <li className="list-group-item list-group-item-action list-group-item-success">
                {e.userId}
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
