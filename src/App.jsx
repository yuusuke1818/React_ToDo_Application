import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./conponents/inputTodo";

export const App = () => {
  const [todoText, setTodotext] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState([]);

  const [complateTodos, setComplateTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodotext(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomplateTodos, todoText];
    setIncomplateTodos(newTodos);
    setTodotext("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incomplateTodos];
    newTodos.splice(index, 1);
    setIncomplateTodos(newTodos);
  };

  const onClickComplate = (index) => {
    onClickDelete(index);
    const newTodos = [...complateTodos, incomplateTodos[index]];
    setComplateTodos(newTodos);
  };

  const onClickBack = (index) => {
    const newTodos = [...complateTodos];
    newTodos.splice(index, 1);
    setComplateTodos(newTodos);
    const newCompleteTodos = [...incomplateTodos, complateTodos[index]];
    setIncomplateTodos(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        value={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incomplateTodos.length >= 3}
      />
      {incomplateTodos.length >= 3 && (
        <p style={{ color: "red" }}>消化しろーーー！</p>
      )}
      <div className="incomplate-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incomplateTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplate(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complate-area">
        <p className="title">完了したTODO</p>
        <ul>
          {complateTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
