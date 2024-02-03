import { useState } from "react";

const ForgotPswForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request password reset for:", email);
  };

  return (
    <section className="contact-form forgot-password-form">
      <h2>
        <span>Reset Password</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <button type="submit" className="reset-password sign-in">
          Send Reset Link
        </button>
      </form>
    </section>
  );
};

export default ForgotPswForm;
