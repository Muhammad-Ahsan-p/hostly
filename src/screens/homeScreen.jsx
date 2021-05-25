import React, { Component } from "react";
import NavBar from "../components/navComponent";
import { Link } from "react-router-dom";
import FeedComponent from "../components/feedComponent";
import auth from "../services/authSerivce";

import "../colors.css";
import "./styles/home.css";
import hostelService from "../services/hostelService";

class HomeScreen extends Component {
  state = {
    hostels: [],
  };
  async componentDidMount() {
    const { data: hostels } = await hostelService.getAllHostels();
    this.setState({ hostels });
  }
  render() {
    const user = auth.getUser();
    const { hostels } = this.state;
    return (
      <div className="bgBlack homeContainer">
        <NavBar />
        <div className="homeSection">
          <div className="followingFeed bgBlue">
            <this.followingComponent
              image={require("../man.png")}
              name="ahsan"
            />
            <this.followingComponent name="abc" />
            <this.followingComponent name="abs" />
          </div>
          <div className="homeFeed">
            {hostels.map((hostel) => (
              <FeedComponent
                key={hostel._id}
                _id={hostel._id}
                title={hostel.title}
                address={hostel.address}
                available_rooms={hostel.available_rooms}
                room_price={hostel.room_price}
                image={hostel.images[0]}
              />
            ))}
          </div>
          {user && (
            <div className="createPost bgBlue">
              <h3 className="fgWhite">Create New Post</h3>
              <Link to="/createPost">
                <button className="bgRed fgWhite">Create</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  followingComponent(props) {
    return (
      <div className="bgBlack followingComponent">
        <p className="fgWhite">{props.name}</p>
        <img src={props.image} />
        <button className="bgRed fgWhite">Follow</button>
      </div>
    );
  }
}

export default HomeScreen;
