import React from "react";
// Pet component.
export default function Pet({ name, animal, breed }) {
  // Destructuring.
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name),
  //   React.createElement("h2", {}, animal),
  //   React.createElement("h2", {}, breed),
  // ]);

  // This is jsx, will automatically translate to above code(createElement...)
  // Which is through parce-babel
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
