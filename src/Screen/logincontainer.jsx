import { useState } from "react";
import LoginForm from "../component/userInputComponent";

const Login = () => {
  const initialUserInfo = { username: "", password: "" };
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  //   const passwordChange = (event) => {
  //     const updatedUserInfo = { ...userInfo };
  //     updatedUserInfo.password = event.target.value;
  //     setUserInfo(updatedUserInfo);
  //   };

  //   const userNameChange = (event) => {
  //     const updatedUserInfo = { ...userInfo };
  //     updatedUserInfo.username = event.target.value;
  //     setUserInfo(updatedUserInfo);
  //   };

  const onChange = (event) => {
    const updatedUserInfo = { ...userInfo };
    updatedUserInfo[event.target.name] = event.target.value;
    setUserInfo(updatedUserInfo);
  };

  //kminchelle
  //0lelplR
  const login = async () => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userInfo.username,
          password: userInfo.password,
          // expiresInMins: 60, // optional
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  console.log(userInfo, "userInfo");
  return (
    <LoginForm
      onChange={onChange}
      password={userInfo.password}
      userName={userInfo.username}
      loginHandler={login}
    />
  );
};

export default Login;
