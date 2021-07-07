import React from 'react';
import ReactDOM from 'react-dom';
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Beam" animal="Dog" breed="Wheaten Terrier" />
    </div>
    )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
