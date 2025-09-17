import React, { useState } from "react";

function App() {
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ageNum = Number(age);
    if (ageNum < 18 || ageNum > 60) {
      setError("Age must be between 18 and 60.");
    } else {
      setError("");
      alert("Age submitted: " + age);
    }
  };

  return (
    <div>
      <h2>Age Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
