import React from "react";
import "../assets/css/components/todoLogin.css";

function TodoLogin({
  users,
  currentUser,
  setCurrentUser,
  login,
  isLogin,
  evtLogin,
}) {
  return (
    <>
      <section className="login-box">
        <strong>{login}</strong>
        <div className="inner">
          <select
            name=""
            id=""
            value={currentUser}
            onChange={(e) => setCurrentUser(e.target.value)}
            disabled={isLogin}
          >
            <option value="">유저를 선택하세요</option>
            {users?.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => evtLogin(currentUser)}
            disabled={currentUser === ""}
          >
            {!isLogin ? "로그인" : "로그아웃"}
          </button>
        </div>
      </section>
    </>
  );
}

export default TodoLogin;
