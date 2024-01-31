import { useState } from "react";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered with:", {
      username,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <section className="contact-form register-form">
      <h2>
        <span>Register</span>
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
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Email"
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
        <div className="input-container">
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default RegisterForm;
