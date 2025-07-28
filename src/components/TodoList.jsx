import React from "react";
import TodoItem from "./TodoItem";
import "../assets/css/components/todoList.css";

function TodoList({
  login,
  isLogin,
  todos,
  evtConfirm,
  evtRemove,
  evtToggleCheck,
}) {
  return (
    <>
      <section className="list-box">
        <ul>
          {isLogin &&
            todos
              ?.filter((item) => item.name === login) // 사용자 이름이 일치할 때만
              .map((item, idx) => (
                <TodoItem
                  key={item.id}
                  index={idx}
                  item={item}
                  evtConfirm={evtConfirm}
                  evtRemove={evtRemove}
                  evtToggleCheck={evtToggleCheck}
                  isLogin={isLogin}
                />
              ))}
        </ul>
      </section>
    </>
  );
}

export default TodoList;
