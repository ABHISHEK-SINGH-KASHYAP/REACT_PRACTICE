import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (pwd) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(pwd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters, include a number and a special character.");
    } else {
      setError("");
      alert("Password accepted!");
    }
  };

  return (
    <div>
      <h2>Password Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
