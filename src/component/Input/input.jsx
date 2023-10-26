const Input = (props) => {
  // props = {type: 'text' ,placeholder="Enter User Name"}

  return (
    <div className="flex flex-col gap-1">
      <label className="self-start">{props.label}</label>
      <input
        className={`${props.classes} border rounded px-2 py-2`}
        {...props}
      />
    </div>
  );
};

export default Input;
