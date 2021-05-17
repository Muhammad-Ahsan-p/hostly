import React, { Component } from "react";
import Joi from "joi-browser";
import cityService from "../services/cityService";

import "../colors.css";
import "./styles/styles.css";
import "./styles/createPost.css";
import hostelService from "../services/hostelService";
import uploadService from "../services/uploadService";

class CreatePost extends Component {
  state = {
    data: {
      title: "",
      description: "",
      address: "",
      room_price: "",
      available_rooms: "",
      city: "",
    },
    errors: {},
  };

  schema = Joi.object({
    title: Joi.string().min(5).required().label("Title"),
    description: Joi.string().min(10).required().label("Description"),
    address: Joi.string().min(5).required().label("Address"),
    room_price: Joi.number().min(1).required().label("Room Price"),
    available_rooms: Joi.number().min(1).required().label("Available Rooms"),
    city: Joi.string(),
  });

  validateInput = (data) => {
    const result = Joi.validate(data, this.schema);
    const errors = {};
    if (!result.error) return {};

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    // sync the state with the form
    const { data } = this.state;
    data[input.name] = input.value;
    this.setState({ data });

    const errors = this.validateInput(data);
    this.setState({ errors });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { data, selectedFile } = this.state;
    const errors = this.validateInput(this.state.data);
    if (!(errors && Object.keys(errors).length === 0)) {
      return alert("Please Resolve Errors in Form");
    }

    let formData = new FormData();
    for (var x = 0; x < selectedFile.length; x++) {
      if (selectedFile[x].type.match(/image.*/))
        formData.append("file", selectedFile[x]);
    }

    try {
      const { data: files } = await uploadService.upload(formData);
      await hostelService.createHostel(data, files);
      alert("Hostel Ad Posted...");
      this.props.history.push("/home");
    } catch (ex) {
      if (ex && ex.response.status === 400) {
        const { errors } = this.state;
        errors.email = ex.response.data;
        this.setState({ errors });
        alert(ex.response.data);
      }
    }
  };

  fileChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files });
  };

  async componentDidMount() {
    try {
      const { data: cities } = await cityService.getAllCities();
      this.setState({ cities });
    } catch (ex) {
      console.log(ex);
    }
  }
  render() {
    const { cities, data, errors } = this.state;

    return (
      <form className="bgBlue center" onSubmit={this.handleSubmit}>
        <div className="bgBlack createPostContainer">
          <h2 className="fgWhite">Create New Post</h2>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={data.title}
            onChange={this.handleChange}
          />
          <span className="validationError">{data.title && errors.title}</span>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Description Here!"
            value={data.description}
            onChange={this.handleChange}
          />
          <span className="validationError">
            {data.description && errors.description}
          </span>

          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            value={data.address}
            onChange={this.handleChange}
          />
          <span className="validationError">
            {data.address && errors.address}
          </span>

          <label htmlFor="room_price">Room Price</label>
          <input
            type="number"
            name="room_price"
            id="room_price"
            placeholder="Price of Room in PKR"
            value={data.room_price}
            onChange={this.handleChange}
          />
          <span className="validationError">
            {data.room_price && errors.room_price}
          </span>

          <label htmlFor="available_rooms">Available Rooms</label>
          <input
            type="number"
            name="available_rooms"
            id="available_rooms"
            placeholder="Number of Rooms"
            value={data.available_rooms}
            onChange={this.handleChange}
          />
          <span className="validationError">
            {data.available_rooms && errors.available_rooms}
          </span>

          <label htmlFor="city">City</label>
          <select
            name="city"
            id="city"
            value={data.city}
            onChange={this.handleChange}
          >
            <option key="_" title="Select One City" value="">
              Select One
            </option>
            {cities &&
              cities.map((city) => (
                <option
                  key={city._id}
                  title={city.description}
                  value={city._id}
                >
                  {city.city_name}
                </option>
              ))}
          </select>
          <span className="validationError">{errors.city}</span>

          <label htmlFor="images">Images</label>
          <input
            className="fgWhite"
            type="file"
            name="file"
            multiple
            required
            accept="image/*"
            onChange={this.fileChangeHandler}
          />
          <button className="bgRed fgWhite">Publish Ad</button>
        </div>
      </form>
    );
  }
}

export default CreatePost;
