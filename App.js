import React from "react";
import ReactDOM from "react-dom/client";

// JSX -->React.createlement --->React element(JS Object) --->HTML Element(render)
const elem = <span>Hi I'm span tag</span>
const Jsxheading = function(){
    return(
  <h1 className="head" tabIndex="5">
    {elem}
    I'm h1 tag from JSX
  </h1>
)};

const HeadingComponent = () => {
  return (
    <div>
      <Jsxheading />
      <Jsxheading></Jsxheading>
      {Jsxheading()}
      {elem}
      <h1>Im rendering from functional component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

