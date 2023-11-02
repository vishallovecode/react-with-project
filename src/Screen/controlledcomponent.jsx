import { useState } from "react";

const LoginControlled = () => {
  const [loginInfo, setLoginInfo] = useState({
    name: "vishal123",
    password: "123456",
  });

  const handlChange = (event) => {
    const updatedLoginInfo = { ...loginInfo };
    updatedLoginInfo[event.target.name] = event.target.value;
    setLoginInfo(updatedLoginInfo);
  };

  return (
    <form className="  m-auto  w-[200px] flex flex-col gap-3">
      <input
        value={loginInfo.name}
        name="name"
        placeholder="Enter User Name"
        onChange={handlChange}
      />
      <input
        value={loginInfo.password}
        placeholder="Enter User Name"
        name="password"
        type="password"
        onChange={handlChange}
      />
      <input type="submit" value={"Login"} />
    </form>
  );
};
export default LoginControlled;
