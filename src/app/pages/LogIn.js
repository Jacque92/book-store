import React from "react";

export const LogIn = ({
  isLogin,
  handleInput,
  userInput,
  handleLoginSubmit,
}) => {
  if (isLogin) {
    return (
      <h1 style={{ width: 460, margin: "auto", marginTop: 200 }}>
        You've login
      </h1>
    );
  }
  return (
    <div style={{ marginTop: 200 }}>
      <form
        onSubmit={handleLoginSubmit}
        style={{
          width: 460,
          height: 400,
          margin: "auto",
          border: "1px solid grey",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "2rem",
        }}
      >
        <h1>Login to Your Account</h1>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label>Email Address</label>
          <input
            name="email"
            value={"" || userInput.email}
            onChange={handleInput}
            style={{ height: 40 }}
            type="text"
            placeholder="email"
          ></input>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label>Password</label>
          <input
            name="password"
            value={"" || userInput.password}
            onChange={handleInput}
            style={{ height: 40 }}
            type="text"
            placeholder="password"
          ></input>
        </div>
        <button style={{ height: 40 }} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};
