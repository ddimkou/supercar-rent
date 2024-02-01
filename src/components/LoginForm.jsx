import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", { username, password });
  };

  return (
    <section className="contact-form login-form">
      <h2>
        <span>Login</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
            placeholder="Username"
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder="Password"
          />
        </div>
        <div className="login-actions">
          <a href="/#" className="forgot-password">
            Forgot my password
          </a>
          <button type="submit" className="sign-in">
            Sign In
          </button>
        </div>
        <div className="signup-link">
          Dont have an account?{" "}
          <a href="/register" className="sign-up-link">
            Sign Up
          </a>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;