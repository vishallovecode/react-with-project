import Button from "../../Button";
import Input from "../Input/input";

const LoginForm = (props) => {
  return (
    <div className="flex m-auto  items-center w-96 justify-center flex-col gap-8 border px-20 py-20">
      <Input classes="w-60" type="text" placeholder="Enter User Name" />
      <Input classes="w-60" type="password" placeholder="Enter Password" />
      <Button classes="border  w-60 p-2 rounded bg-red-600 text-white">
        Continue
      </Button>
    </div>
  );
};

export default LoginForm;
