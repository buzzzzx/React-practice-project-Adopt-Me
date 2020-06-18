import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import { connect } from "react-redux";
import useDropdown from "./useDropdown";
import Results from "./Results";
import changeLocation from "./actionCreators/changeLocation";
import changeTheme from "./actionCreators/changeTheme";

const SearchParams = (props) => {
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "cat", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  async function requestPets() {
    const { animals } = await pet.animals({
      locaton: props.location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]); // every time after render or update, first clean out placeholder
    setBreed(""); // every time after render or update, first clean out placeholder

    pet.breeds(animal).then(({ breeds }) => {
      setBreeds(breeds.map(({ name }) => name));
    }, console.error);
  }, [animal, setBreed, setBreeds]); // control that only when update animal or setBreed or setBreeds, we use effect.

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={props.location}
            placeholder="Location"
            onChange={(event) => props.setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            value={props.theme}
            onChange={(event) => props.setTheme(event.target.value)}
            onBlur={(event) => props.setTheme(event.target.value)}
          >
            <option value="darkblue">Darkblue</option>
            <option value="peru">Peru</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: props.theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

const mapStateToProps = ({ theme, location }) => ({
  theme,
  location,
});

const mapDispatchToProps = (dispatch) => ({
  setTheme: (theme) => dispatch(changeTheme(theme)),
  setLocation: (location) => dispatch(changeLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchParams);
