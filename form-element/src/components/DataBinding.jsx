import { useState } from "react";

const INIT_STATE = {
  name: "",
};

const DataBinding = () => {
  const [values, setValues] = useState({ ...INIT_STATE });
  const { name } = values;

  const handleButtonClick = (events) => {
    console.log(events.target);
  };

  const handleChange = (events) => {
    setValues({ ...values, name: events.target.value });
  };

  const handleFocus = () => {
    console.log("I am focus events");
  };

  const handleBlur = () => {
    if (!name) {
      alert("Please enter your name");
    }
    console.log("I am blur events");
  };

  return (
    <div>
      <h1 className="text-4xl">Events In React</h1>
      <button onClick={handleButtonClick}>Click me</button>
      <br />
      <input
        type="text"
        placeholder="Enter Some text"
        value={name}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {name && <h2>Welcome, {name}</h2>}
    </div>
  );
};

export default DataBinding;
