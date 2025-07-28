import React from "react";
import "../assets/css/components/todoInput.css";

function TodoInput({ isLogin, input, setInput, evtCreateTodo }) {
  return (
    <>
      <section className="input-box">
        <input
          type="text"
          id="inputAdd"
          name=""
          placeholder="할 일 입력"
          value={input}
          disabled={!isLogin}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-dark"
          disabled={!isLogin}
          onClick={evtCreateTodo}
        >
          등록
        </button>
      </section>
    </>
  );
}

export default TodoInput;
