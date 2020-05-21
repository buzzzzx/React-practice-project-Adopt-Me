import React from "react";
// Pet component.
export default function Pet({ name, animal, breed }) {
  // Destructuring.
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
}
