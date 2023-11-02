const LoginUnControlled = () => {
  const loginHandler = (event) => {
    event.preventDefault();
    const userName = document.getElementById("#input1").value;
    const password = document.getElementById("#input2").value;
    console.log(userName, password);
  };
  return (
    <form
      className="  m-auto  w-[200px] flex flex-col gap-3"
      onSubmit={loginHandler}
    >
      <input id="#input1" placeholder="Enter User Name" />
      <input id="#input2" placeholder="Enter Password" />
      <input type="submit" value={"Login"} />
    </form>
  );
};
export default LoginUnControlled;

// it is getting the value from dom and not depend on react state that compoentn are called  uncontrolled component
