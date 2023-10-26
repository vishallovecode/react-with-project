import { useState } from "react";
import LoginForm from "../component/userInputComponent";
import GenerateForm from "../component/GenerateForm";

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

  const inputForm = [
    {
      Fieldvariant: "Input",
      type: "text",
      placeHolder: "Enter User Name",
      label: "User Name",
      name: "username",
    },
    {
      Fieldvariant: "Input",
      type: "password",
      label: "Password",
      placeHolder: "Enter Password ",
      name: "password",
    },
    {
      Fieldvariant: "Input",
      type: "email",
      placeHolder: "Enter Email Name",
      label: "Email",
      name: "email",
    },
    {
      Fieldvariant: "Input",
      type: "number",
      placeHolder: "Enter Phone Number",
      label: "Contact",
      name: "contact",
    },
    {
      Fieldvariant: "Select",
      options: [
        { id: "123", label: "Hindi" },
        { id: "13", label: "Marathi" },
        { id: "23", label: "Bengali" },
        { id: "43", label: "English" },
      ],
      label: "Select Language",
      idKey: "id",
      labelKey: "label",
    },

    {
      Fieldvariant: "Select",
      options: [
        { id: "123", name: "Kanpur" },
        { id: "13", name: "Bangalore" },
        { id: "23", name: "Pune" },
        { id: "43", name: "Delhi" },
      ],
      label: "Select City",
      idKey: "id",
      labelKey: "name",
    },
    {
      Fieldvariant: "Checkbox",
      type: "checkbox",
      placeHolder: "",
      buttonText: "",
      label: "Are You under age ?",
      value: true,
      checked: true,
    },
    {
      Fieldvariant: "Button",
      type: "password",
      placeHolder: "",
      buttonText: "Continue",
      label: "Email",
      name: "",
    },
  ];

  console.log(userInfo, "userInfo");
  return (
    // <LoginForm
    //   onChange={onChange}
    //   password={userInfo.password}
    //   userName={userInfo.username}
    //   loginHandler={login}
    // />
    <GenerateForm formConfig={inputForm} />
  );
};

export default Login;
