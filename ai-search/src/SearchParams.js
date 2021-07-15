import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  // const breeds = [];

  useEffect(() => {
    // This is where we are gonna put all of our async code
    // you can just use *promises* to request the pets, but we want to use *async function*
    requestPets();
  }, []);
  // This "[]" squre brackets is basically telling this effect, hey! when should you re-run it?
  // It always run once at the beginning, and then you are telling it, when do you want me to run again.
  // If you dont give anything, it is going to re-run after every runder. Which we kind of create an **infinite loop** here,
  // Because every time when we callsetPets, every time we update one of the hooks, or one piece of state. So we put "[]" these square bracekets  here
  // for it to say "I want you to do only once". If i put "[animal]" means I want you to update **anytime animal updates**, it is gonna check, Okay, I am
  // only gonna update when animal changes.

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    // console.log(json);

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
