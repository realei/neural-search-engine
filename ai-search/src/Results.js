import Pet from "./Pet";

const Results = ({ pets }) => {
  // ({ pets }) is going to pull out of "pets" props object, something called pets and call it pets
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => {
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.image}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />;
        })
      )}
    </div>
  );
};

export default Results;
