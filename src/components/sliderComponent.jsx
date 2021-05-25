import React, { Component } from "react";
import { apiImageUrl } from "../config.json";

import "./styles/slider.css";

class Slider extends Component {
  state = {
    imageRef: React.createRef(),
    currentSlide: -1,
    images: [],
  };

  nextSlide = (currentSlide) => {
    if (currentSlide) this.state.currentSlide = currentSlide;
    else {
      this.state.currentSlide =
        (this.state.currentSlide + 1) % this.props.images.length;
    }
    return this.state.currentSlide;
  };

  displaySlide = (id) => {
    if (id) {
      clearInterval(this.state.slideInterval);
      const slideInterval = setInterval(() => {
        this.displaySlide();
      }, 5000);
      this.setState({ slideInterval });
    }
    const { current: slideImage } = this.state.imageRef;
    const activeRadio = this.nextSlide(id);
    const radios = document.getElementsByName("slider-control");
    try {
      radios[activeRadio].checked = true;
    } catch (ex) {}

    slideImage.animate(
      [
        { opacity: "0.25" },
        { opacity: "0.05" },
        { opacity: "0.01" },
        { opacity: "0" },
        { opacity: "0" },
        { opacity: "0" },
        { opacity: "0.5" },
        { opacity: "1" },
      ],
      {
        duration: 1000,
      }
    );
    slideImage.animate(
      [
        // keyframes
        { transform: "translateX(0%)" },
        { transform: "translateX(-80%)" },
        { transform: "translateX(-100%)" },
        { transform: "translateX(-80%)" },
        { transform: "translateX(0%)" },
        { transform: "translateX(100%)" },
        { transform: "translateX(80%)" },
        { transform: "translateX(0%)" },
      ],
      {
        // timing options
        duration: 1000,
      }
    );

    slideImage.src = `${apiImageUrl}/${this.props.images[activeRadio]}`;
  };

  componentDidMount() {
    this.setState({ currentSlide: -1 });
    this.displaySlide();
    const slideInterval = setInterval(() => {
      this.displaySlide();
    }, 5000);
    this.setState({ slideInterval });
  }
  componentWillUnmount() {
    clearInterval(this.state.slideInterval);
  }
  render() {
    const { images } = this.props;

    return (
      <div className="slider">
        <div className="control">
          {images.map((_, index) => (
            <input
              type="radio"
              name="slider-control"
              key={index}
              id={index}
              onClick={({ target: control }) => {
                this.displaySlide(control.id);
              }}
            />
          ))}
        </div>

        <div className="slide">
          <img
            ref={this.state.imageRef}
            src={this.state.currentImage}
            alt="Loading Slider..."
            id="slide-image"
          />
        </div>
      </div>
    );
  }
}

export default Slider;
