import Button from "../../Button";
import Input from "../Input/input";

// display container
const LoginForm = (props) => {
  const { password, userName, onChange, loginHandler } = props;
  return (
    <div className="flex m-auto  items-center w-96 justify-center flex-col gap-8 border px-20 py-20">
      <Input
        onChange={onChange} // event listener
        value={userName}
        name="username"
        classes="w-60"
        type="text"
        placeholder="Enter User Name"
      />
      <Input
        value={password}
        onChange={onChange}
        classes="w-60"
        name="password"
        type="password"
        placeholder="Enter Password"
      />
      <Button
        clickHandler={loginHandler}
        classes="border  w-60 p-2 rounded bg-red-600 text-white"
      >
        Continue
      </Button>
    </div>
  );
};

export default LoginForm;
