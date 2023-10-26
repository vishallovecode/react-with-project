import Button from "../../Button";
import Input from "../Input/input";
import CheckBox from "../checkbox";
import DropDown from "../dropdown";

const GenerateForm = (props) => {
  const { formConfig } = props;
  return (
    <div className="flex m-auto  items-center w-96 justify-center flex-col gap-8 border px-20 py-20">
      {formConfig.map((config) => {
        // config => object
        if (config.Fieldvariant === "Input") return <Input {...config} />;
        else if (config.Fieldvariant === "Button")
          return (
            <Button
              {...config}
              classes="border  w-60 p-2 rounded bg-red-600 text-white disabled:bg-gray-300"
            />
          );
        else if (config.Fieldvariant == "Select") {
          return <DropDown {...config} />;
        } else if (config.Fieldvariant == "Checkbox") {
          return <CheckBox {...config} />;
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
