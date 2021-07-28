import { Link } from "react-router-dom";
// import React from "react";

const Pet = (name, animal, breed, images, location, id) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (image.length) {
    hero = images[0];
  }

  return (
    <Link href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};
export default Pet;
