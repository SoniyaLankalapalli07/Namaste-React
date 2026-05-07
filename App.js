{/* <div id="parent">
    <div id="child1">
        <h1>Im child1 H1 TAG</h1>
        <h2>Im child1 h2 tag</h2>
    </div>
    <div id="child2">
        <h1>Im child2 H1 TAG</h1>
        <h2>Im child2 h2 tag</h2>
    </div>

</div> */}
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    [
        React.createElement(
            "div", 
            { id: "child1" }, 
            [React.createElement("h1", { id: "h1tag1" }, "Im child1 H1 TAG"),React.createElement("h2", { id: "h2tag1" }, "Im child1 h2 tag")]
        ),
        React.createElement(
            "div", 
            { id: "child2" }, 
            [React.createElement("h1", { id: "h1tag2" }, "Im child2 H1 TAG"),React.createElement("h2", { id: "h2tag2" }, "Im child2 h2 tag")]
        )
    ]);


// const heading = React.createElement("h1", { id: "h1tag" }, "Hello World from ReactJS");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);   
