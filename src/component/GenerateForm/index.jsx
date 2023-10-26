import Button from "../../Button";
import Input from "../Input/input";
import CheckBox from "../checkbox";
import DropDown from "../dropdown";

const GenerateForm = (props) => {
  const { formConfig, handleFormChange, actionHandler } = props;
  return (
    <div className="flex m-auto  items-center w-96 justify-center flex-col gap-8 border px-20 py-20">
      {formConfig.map((config) => {
        // config => object
        if (config.Fieldvariant === "Input")
          return <Input onChange={handleFormChange} {...config} />;
        else if (config.Fieldvariant === "Button")
          return (
            <Button
              clickHandler={actionHandler}
              {...config}
              classes="border  w-60 p-2 rounded bg-red-600 text-white disabled:bg-gray-300"
            />
          );
        else if (config.Fieldvariant == "Select") {
          return <DropDown handleChange={handleFormChange} {...config} />;
        } else if (config.Fieldvariant == "Checkbox") {
          return (
            <CheckBox
              onChange={(event) => handleFormChange(event, "checkbox")}
              {...config}
            />
          );
        }
      })}
    </div>
  );
};
export default GenerateForm;

// form can consist multiple field///
// Input => Input
// Button  =>
// Select
// Checkbox
// Toggle
// TextArea
// Radio
// Date
// Label
