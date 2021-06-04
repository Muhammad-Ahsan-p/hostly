import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/navComponent";
import FeedComponent from "../components/feedComponent";
import PostComponent from "../components/createPostComponent";

import auth from "../services/authSerivce";
import hostelService from "../services/hostelService";
import userService from "../services/userService";

import img from "../images/stones.jpg";
import "./styles/home.css";

class HomeScreen extends Component {
  state = {
    hostels: [],
    users: [],
  };

  async componentDidMount() {
    const { data: hostels } = await hostelService.getAllHostels();
    this.setState({ hostels });
    const { data } = await userService.getAllUsers();
    this.setState({ users: data });
  }

  handlePostCreated = (hostel) => {
    let { hostels } = this.state;
    hostels = [hostel, ...hostels];
    this.setState({ hostels });
  };

  render() {
    const user = auth.getUser();
    const { hostels, users } = this.state;
    return (
      <div className="homeContainer">
        <NavBar />
        <div className="homeSection">
          <div className="followingFeed">
            {users.map((user) => (
              <Link to={"/chat/" + user._id} key={user._id}>
                <this.followingComponent
                  image={require("../images/stones.jpg")}
                  name={user.name}
                />
              </Link>
            ))}
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
                avatar={img}
              />
            ))}
          </div>
          {user && <PostComponent onPostCreated={this.handlePostCreated} />}
        </div>
      </div>
    );
  }

  followingComponent(props) {
    return (
      <div className="followingComponent">
        <img src={props.image} />
        <p className="fgWhite">{props.name}</p>
      </div>
    );
  }
}

export default HomeScreen;
