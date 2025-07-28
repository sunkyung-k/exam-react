import React from "react";
import "../assets/css/components/todoBtns.css";

function TodoBtns({ todos, isLogin, bulkConfirmItem, bulkRemoveItem }) {
  return (
    <>
      <section className="btn-box">
        <button
          type="button"
          className="btn btn-primary"
          disabled={!isLogin || todos.length === 0}
          onClick={bulkConfirmItem}
        >
          일괄 완료
        </button>
        <button
          type="button"
          className="btn btn-danger"
          disabled={!isLogin || todos.length === 0}
          onClick={bulkRemoveItem}
        >
          일괄 삭제
        </button>
      </section>
    </>
  );
}

export default TodoBtns;
