import React, { Component } from "react";
import NavBar from "../components/navComponent";
import hostelService from "../services/hostelService";

import "./styles/detail.css";
import Slider from "../components/sliderComponent";

class Details extends Component {
  state = {
    hostel: {
      images: [],
      user: {},
      city: {},
    },
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const { data: hostel } = await hostelService.getHostelById(id);
    this.setState({ hostel });
  }
  render() {
    const { hostel } = this.state;

    return (
      <div className="detailContainer">
        <NavBar />
        <div className="detailContent">
          <dl>
            <dt>Discription</dt>
            <dd>{hostel.description}</dd>
            <dt>Available Rooms</dt>
            <dd>{hostel.available_rooms}</dd>
            <dt>Room Price</dt>
            <dd>{hostel.room_price}</dd>
            <dt>Images</dt>
            <div className="slideContainer">
              <Slider images={hostel.images} />
            </div>
            <dt>Contact and User</dt>
            <dd>
              <ul>
                <li>{hostel.user.name}</li>
                <li>{hostel.user.email}</li>
                <li>{hostel.user.phone_number}</li>
              </ul>
            </dd>
          </dl>
          <dt>Address</dt>
          <dd>{hostel.address}</dd>
          <dt>City</dt>
          <dd>{`${hostel.city.city_name} | ${hostel.city.description}`}</dd>

          <dt>Member since</dt>
          <dd>{new Date(hostel.user.date_created).toDateString()}</dd>
        </div>
      </div>
    );
  }
}

export default Details;
