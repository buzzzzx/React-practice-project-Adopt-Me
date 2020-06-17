import React, { FunctionComponent } from "react";
import Pet from "./Pet";
import { Animal } from "@frontendmasters/pet";

interface IProps {
  pets: Animal[];
}

const Results: FunctionComponent<IProps> = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>Not Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              name={pet.name}
              key={pet.id}
              animal={pet.type}
              breed={pet.breeds.primary}
              id={pet.id}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
