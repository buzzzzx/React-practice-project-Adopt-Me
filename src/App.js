// Pet component.
const Pet = ({ name, animal, breed}) => {  // Destructuring.
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
}

// Component.
const App = () => {
  return React.createElement(
    "div", // the tag we want to create, also can be a component like App
    {}, // the attribute we want to put inside in this tag, e.g. {id: "app-div"}
    [   // child element of this tag, also can be an array of child elements.
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {name: "Shanshan", animal: "Cat", breed: "Go"}),
        React.createElement(Pet, {name: "Luna", animal: "Dog", breed: "Havanese"}),
        React.createElement(Pet, {name: "Dokin", animal: "bird", breed: "Mixed"})
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
