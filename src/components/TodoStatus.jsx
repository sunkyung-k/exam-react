import React from "react";
import "../assets/css/components/todoStatus.css";

function TodoStatus({ todoCount, confirmItem, confirmPercent }) {
  return (
    <>
      <section className="status-box">
        <dl>
          <dt>할 일</dt>
          <dd>{todoCount}건</dd>
          <dt>한 일</dt>
          <dd>{confirmItem}건</dd>
          <dt>달성률</dt>
          <dd>{confirmPercent}%</dd>
        </dl>
      </section>
    </>
  );
}

export default TodoStatus;
