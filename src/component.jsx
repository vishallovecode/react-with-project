import { Fragment } from "react";
import "./button.css";
// named exporting
// export function Button() {
//   return <button className="button-cont">Submit</button>;
// }

// export function Input() {
//   return (
//     <div>
//       <input placeholder="Enter A name" />
//       <Button />
//     </div>
//   );
// }

// react components
export const Summary = () => {
  return (
    <div>
      <h2>12</h2>
      <h3>23</h3>
      <h4>45</h4>
      <h5>56</h5>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, quod
        est impedit blanditiis ut hic tempore, amet illo, ex alias saepe
        exercitationem. Eligendi unde ea molestiae, debitis doloremque delectus
        reiciendis.
      </p>
      <Button />
    </div>
  );
};

// this is using array
export const MulitElement = () => {
  return [<h2>Hey I am h2</h2>, <h3>Hey I am h2</h3>];
};

export const FragmentExample = () => {
  return (
    <>
      <h2>Hey I am h2</h2>
      <h3>Hey I am h3</h3>
    </>
  );
};

export const FragmentExample1 = () => {
  return (
    <Fragment>
      <h2>Hey I am h2</h2>
      <h3>Hey I am h3</h3>
    </Fragment>
  );
};
