import Button from "../../Button";
import Input from "../Input/input";

const GenerateForm = (props) => {
  const { formConfig } = props;
  return (
    <div className="flex m-auto  items-center w-96 justify-center flex-col gap-8 border px-20 py-20">
      {formConfig.map((config) => {
        if (config.Fieldvariant === "Input") return <Input {...config} />;
        else if (config.Fieldvariant === "Button")
          return (
            <Button
              {...config}
              classes="border  w-60 p-2 rounded bg-red-600 text-white disabled:bg-gray-300"
            />
          );
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
