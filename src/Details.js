import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  state = { loading: true };
  // Only execute once after first render.
  componentDidMount() {
    // need to use arrow function
    pet.animal(Number(this.props.id)).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        breed: animal.breeds.primary,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        loading: false,
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }

    const { name, animal, breed, location, description } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>{`Adopt ${name}`}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
