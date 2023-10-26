import { useState } from "react";
import LoginForm from "../component/userInputComponent";
import GenerateForm from "../component/GenerateForm";

const Login = () => {
  const initialUserInfo = { username: "", password: "" };
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
    contact: "",
    language: "",
    city: "",
    isUnderAge: false,
  });
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

  const handleFormChange = (event, type) => {
    const updateFormData = { ...formData };
    if (type === "checkbox") {
      updateFormData[event.target.name] = event.target.checked;
    } else {
      updateFormData[event.target.name] = event.target.value;
    }

    setFormData(updateFormData);
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

  const actionHandler = () => {
    console.log(formData);
  };

  const inputForm = [
    {
      Fieldvariant: "Input",
      type: "text",
      placeHolder: "Enter User Name",
      label: "User Name",
      name: "userName",
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
      name: "language",
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
      name: "city",
    },
    {
      Fieldvariant: "Checkbox",
      type: "checkbox",
      placeHolder: "",
      buttonText: "",
      label: "Are You under age ?",
      value: true,
      checked: true,
      name: "isUnderAge",
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
    <GenerateForm
      actionHandler={actionHandler}
      formConfig={inputForm}
      handleFormChange={handleFormChange}
    />
  );
};

export default Login;
