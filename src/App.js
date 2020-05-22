import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

//App component.
const App = () => {
  // return React.createElement(
  //   "div", // the tag we want to create, also can be a component like App
  //   {}, // the attribute we want to put inside in this tag, e.g. {id: "app-div"}
  //   [
  //     // child element of this tag, also can be an array of child elements.
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Shanshan",
  //       animal: "Cat",
  //       breed: "Go",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Luna",
  //       animal: "Dog",
  //       breed: "Havanese",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Dokin",
  //       animal: "Bird",
  //       breed: "Mixed",
  //     }),
  //   ]
  // );

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Shanshan" animal="Cat" breed="Mixed" />
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Dokin" animal="Bird" breed="Worm" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
