// whatever react components return that is called JSX (Javascript XML)  (Javascript Extension Syntax)
// use for writing html css and  javascript together

// import { createElement } from "react";

// const JSXExample = () => {
//   return <div id="createElement">This is jsx example</div>;
// };

import { createElement } from "react";

const JSXExample = () => {
  const data = createElement(
    "div",
    { id: "createElement", className: "vishal", onClick: () => alert("hi") },
    "This is jsx example"
  );
  console.log(data);
  return data;
};

export default JSXExample;

// Babel which is javascript compiler it is convert React jsx to browser understandable code
