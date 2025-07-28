import React from "react";
import "../assets/css/pages/main.css";
import TodoLogin from "../components/TodoLogin";
import TodoStatus from "../components/TodoStatus";
import TodoInput from "../components/TodoInput";
import TodoBtns from "../components/TodoBtns";
import TodoList from "../components/TodoList";
import { useState } from "react";
import { useEffect } from "react";

function TodoPage(props) {
  const [users, setUsers] = useState(["김선경", "홍길동"]); // 유저 리스트
  const [currentUser, setCurrentUser] = useState("");
  const [login, setLogin] = useState(""); // 로그인 이름
  const [isLogin, setIsLogin] = useState(false); // 로그인 유무
  const [input, setInput] = useState(""); // input 입력값
  const [todos, setTodos] = useState([]); // todolist
  const [todoCount, setTodoCount] = useState(0); // 할 일
  const [confirmItem, setConfirmItem] = useState(0); // 한 일
  const [confirmPercent, setConfirmPercent] = useState(0); // 상태 퍼센트

  // 로그인
  const evtLogin = (userName) => {
    if (login === userName) {
      // 로그인 후 로그아웃 => reset
      setLogin("");
      setCurrentUser("");
      setIsLogin(false);
    } else {
      // 로그인
      setLogin(userName);
      setIsLogin(true);
    }

    // isCheced reset
    const uncheckedTodos = todos.map((item) => ({ ...item, isChecked: false }));
    setTodos(uncheckedTodos);
  };

  // todo 추가
  const evtCreateTodo = () => {
    if (!input.trim()) {
      alert("할 일을 입력하십시오.");
      return;
    }
    const newTodo = {
      id: Date.now(),
      isChecked: false,
      name: login,
      text: input,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  // todo 체크박스 선택
  const evtToggleCheck = (target) => {
    const updated = todos.map((todo) =>
      todo.id === target.id ? { ...todo, isChecked: !todo.isChecked } : todo
    );
    setTodos(updated);
  };

  // 완료
  const evtConfirm = (target) => {
    const updated = todos.map((todo) =>
      todo.id === target.id ? { ...todo, isDone: true } : todo
    );
    setTodos(updated);
  };

  // 삭제
  const evtRemove = (target) => {
    const confirmed = window.confirm("정말 삭제하시겠습니까?");
    if (confirmed) {
      const updated = todos.filter((todo) => todo.id !== target.id);
      setTodos(updated);
    }
  };

  // 일괄완료
  const bulkConfirmItem = () => {
    const hasDone = todos.some(
      (todo) => todo.name === login && todo.isChecked && !todo.isDone // 아직 완료 안 된 걸 체크함
    );
    if (!hasDone) {
      alert("일괄 처리할 일감을 체크해주십시오.");
      return;
    }

    const updated = todos.map((todo) =>
      todo.name === login && todo.isChecked ? { ...todo, isDone: true } : todo
    );
    setTodos(updated);
  };

  // 일괄삭제
  const bulkRemoveItem = () => {
    const hasChecked = todos.some(
      (todo) => todo.name === login && todo.isChecked
    );
    if (!hasChecked) {
      alert("삭제 처리할 일감을 체크해주십시오.");
      return;
    }

    const confirmed = window.confirm("선택한 리스트를 일괄 삭제하시겠습니까?");
    if (confirmed) {
      const updated = todos.filter((todo) => {
        if (todo.name === login && todo.isChecked) return false;
        return true;
      });
      setTodos(updated);
    }
  };

  // status 계산
  useEffect(() => {
    const count = todos.filter((item) => item.name === login).length;
    const confirm = todos
      .filter((item) => item.name === login)
      .filter((item) => item.isDone).length;
    const percent = Math.floor(count !== 0 ? (confirm / count) * 100 : 0);

    setTodoCount(count);
    setConfirmItem(confirm);
    setConfirmPercent(percent);
  }, [todos, login]);

  return (
    <>
      <main id="container">
        <TodoLogin
          users={users}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          login={login}
          isLogin={isLogin}
          evtLogin={evtLogin}
        />
        <TodoStatus
          todoCount={todoCount}
          confirmItem={confirmItem}
          confirmPercent={confirmPercent}
        />
        <TodoInput
          isLogin={isLogin}
          input={input}
          setInput={setInput}
          evtCreateTodo={evtCreateTodo}
        />
        <TodoBtns
          todos={todos}
          isLogin={isLogin}
          bulkConfirmItem={bulkConfirmItem}
          bulkRemoveItem={bulkRemoveItem}
        />
        <TodoList
          login={login}
          isLogin={isLogin}
          todos={todos.filter((item) => item.name === login)}
          evtConfirm={evtConfirm}
          evtRemove={evtRemove}
          evtToggleCheck={evtToggleCheck}
        />
      </main>
    </>
  );
}

export default TodoPage;
