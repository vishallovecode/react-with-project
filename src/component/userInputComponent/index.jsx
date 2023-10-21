import Button from "../../Button";
import Input from "../Input/input";

// display container
const LoginForm = (props) => {
  const { password, userName, onChange, loginHandler } = props;

  const isDisabled = () => {
    if (userName.length < 6 || password.length < 6) {
      return true;
    }
    return false;
  };
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
        disabled={isDisabled()} // if disabled =true than button will be disabled
        classes="border  w-60 p-2 rounded bg-red-600 text-white disabled:bg-gray-300"
      >
        Continue
      </Button>
    </div>
  );
};

export default LoginForm;

// if one of the field is empty than we  do not want to enable button
// we want to enable button only when there value in both field
// minimum length of username is 6  => means user name should have length greater than or equal to 6
// minimum length of password is 6  =>means password should have length greater than or equal to 6
