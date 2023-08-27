import { useState, useEffect } from "react";
import "./App.css";

const PasswordStrength = ({ password }) => {
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    splchar: false,
  });

  useEffect(() => {
    let tempStrength = {};
    tempStrength.length = password.length >=8 ? true : false;
    tempStrength.uppercase = password.toLowerCase() !== password ? true : false;              // Abc !== abc
    tempStrength.lowercase = password.toUpperCase() !== password ? true : false;              // aBC !== ABC
    tempStrength.number = /\d/.test(password) ? true : false;          
    tempStrength.splchar = /\W/.test(password) ? true : false;
    setPasswordStrength(tempStrength);
  },[password])
  console.log(Object.values(passwordStrength));
  const passwordStrengthTrueValues = Object.values(passwordStrength).filter((value) => value===true);
  var circleColor = "red";
  if(passwordStrengthTrueValues.length > 2) {
    circleColor = passwordStrengthTrueValues.length <= 4 ? "#e9bb2d" : "#2dc937";
  }
  return <div className="circle" style={{backgroundColor: circleColor}}></div>
};

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleReset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Log In</h1>
        <input
          className="input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <div style={{ position: "relative" }}>
          <img
            src={isPasswordVisible ? "eyeSlash.svg" : "eye.svg"}
            className={isPasswordVisible ? "eyeSlash" : "eye"}
            onClick={() => setIsPasswordVisible((prev) => !prev)}
          ></img>
          <input
            className="input"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <span className="passwordStrength">
          Password Strength: <PasswordStrength password={password} />
        </span>
        <span>
          <button onClick={() => console.log(`Logging in ${email}`)}>
            LogIn
          </button>
          <button onClick={handleReset}>Reset</button>
        </span>
      </div>
    </div>
  );
};

export default App;
