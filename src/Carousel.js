import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos }; // this will integrate with state.
  }

  redner() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {this.props.media.map(({ photo, index }) => (
            // eslint-disable-next-line
            <img
              key={photo.large}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo.large}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
