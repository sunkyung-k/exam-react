import React from "react";

function TodoItem({
  isLogin,
  index,
  item,
  evtConfirm,
  evtRemove,
  evtToggleCheck,
}) {
  return (
    <>
      <li className={item.isDone ? "item-confirm" : ""}>
        <span className="list-chk">
          <input
            type="checkbox"
            id={`chk-${index}`}
            name=""
            checked={item.isChecked}
            onChange={() => evtToggleCheck(item)}
          />
        </span>
        <span className="list-txt">{item.text}</span>
        <span className="list-btn">
          <button
            type="button"
            className="btn btn-s btn-primary"
            disabled={!isLogin || item.isDone}
            onClick={() => evtConfirm(item)}
          >
            완료
          </button>
          <button
            type="button"
            className="btn btn-s btn-danger"
            disabled={!isLogin}
            onClick={() => evtRemove(item)}
          >
            삭제
          </button>
        </span>
      </li>
    </>
  );
}

export default TodoItem;
