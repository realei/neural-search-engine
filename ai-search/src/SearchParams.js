import { useState } from 'react';

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("")

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input id="location"
            onChange={(e) => setLocation(e.target.value)} 
            value={location}
            placeholder="Location" />
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
              {
                ANIMALS.map(animal => (
                  <option value={animal} key={animal}>
                    {animal}
                  </option>
                ))
              }
            </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;