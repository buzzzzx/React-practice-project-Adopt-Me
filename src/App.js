import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

//App component.
const App = () => {
  return React.createElement(
    "div", // the tag we want to create, also can be a component like App
    {}, // the attribute we want to put inside in this tag, e.g. {id: "app-div"}
    [
      // child element of this tag, also can be an array of child elements.
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Shanshan",
        animal: "Cat",
        breed: "Go",
      }),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        name: "Dokin",
        animal: "bird",
        breed: "Mixed",
      }),
    ]
  );
};

render(React.createElement(App), document.getElementById("root"));
