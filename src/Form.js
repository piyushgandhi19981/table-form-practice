import { useState } from "react";

export default (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, age, email);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Age</label>
          <input
            type="number"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Email</label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
