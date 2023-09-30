const DropDown = (props) => {
  const { options, handleChange, idKey, labelKey } = props;
  // Options is the array of object
  // options
  // handleChange

  return (
    <select onChange={handleChange}>
      {options.map((option) => {
        return <option value={option[idKey]}>{option[labelKey]}</option>;
      })}
    </select>
  );
};

export default DropDown;
