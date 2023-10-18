import { useState } from "react";

const INIT_STATE = {
  name: "",
  country: "",
  bio: "",
  birthday: "",
  gender: "",
  agree: false,
  skills: [],
};

const InputElements = () => {
  const [inputs, setInputs] = useState(INIT_STATE);
  const { name, country, bio, birthday, gender, agree, skills } = inputs;

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleChackbox = (event) => {
    setInputs({ ...inputs, agree: event.target.checked });
  };

  const handleSkillChange = (event) => {
    if (event.target.checked) {
      setInputs({ ...inputs, skills: [...inputs.skills, event.target.value] });
    } else {
      const skills = inputs.skills.filter(
        (skill) => skill !== event.target.value
      );
      setInputs({ ...inputs, skills });
    }
  };
  return (
    <div className="wrapper mt-20 bg-red-800">
      <h1 className="text-8xl text-red-500 text-center">
        Working with form in react
      </h1>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <br />
      <br />
      <select name="country" value={country} onChange={handleChange}>
        <option value=""> Select your country</option>
        <option value="bangladesh"> Bangladesh</option>
        <option value="india"> India</option>
        <option value="pakistan"> Pakistan</option>
      </select>
      <br />
      <br />
      <textarea
        name="bio"
        value={bio}
        placeholder="tell me your bio"
        onChange={handleChange}
      ></textarea>
      <br />
      <br />
      <input
        type="date"
        name="birthday"
        placeholder="birthday"
        value={birthday}
        onChange={handleChange}
      />
      <br />
      <br />
      <input type="radio" name="gender" value="male" onChange={handleChange} />
      male
      <input
        type="radio"
        name="gender"
        value="female"
        onChange={handleChange}
      />{" "}
      female
      <br />
      <br />
      <div>
        <h2>skills</h2>
        <input
          type="checkbox"
          name="skills"
          value="java"
          checked={skills.includes("java")}
          onChange={handleSkillChange}
        />{" "}
        Java
        <input
          type="checkbox"
          name="skills"
          value="javascript"
          checked={skills.includes("javascript")}
          onChange={handleSkillChange}
        />{" "}
        JavaScript
        <input
          type="checkbox"
          name="skills"
          value="python"
          checked={skills.includes("python")}
          onChange={handleSkillChange}
        />{" "}
        Python
      </div>
      <div>
        <input
          type="checkbox"
          name="agree"
          checked={agree}
          onChange={handleChackbox}
        />
        I agree with condition
      </div>
      <button onClick={() => console.log(inputs)}>Show data</button>
    </div>
  );
};

export default InputElements;
