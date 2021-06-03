import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/navComponent";
import FeedComponent from "../components/feedComponent";
import PostComponent from "../components/createPostComponent"; 

import auth from "../services/authSerivce";
import hostelService from "../services/hostelService";


import img from "../images/stones.jpg";
import "./styles/home.css";
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
      <div className="homeContainer">
        <NavBar />
        <div className="homeSection">
          <div className="followingFeed">
            <this.followingComponent
              image={require("../images/stones.jpg")}
              name="RSDF"
            />
            <this.followingComponent
              image={require("../images/stones.jpg")}
              name="DCH"
            />
            <this.followingComponent
              image={require("../images/stones.jpg")}
              name="ABS"
            />
                        <this.followingComponent
              image={require("../images/stones.jpg")}
              name="RSDF"
            />
            <this.followingComponent
              image={require("../images/stones.jpg")}
              name="DCH"
            />
            <this.followingComponent
              image={require("../images/stones.jpg")}
              name="ABS"
            />

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
            <FeedComponent title="Ahb" room_price="3800" image={img} avatar={img}/>
            <FeedComponent title="Ahb" room_price="3800" image={img} avatar={img}/>
          </div>
          <PostComponent/>
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
      <div className="followingComponent">
        <img src={props.image} />
        <p className="fgWhite">{props.name}</p>
      </div>
    );
  }
}

export default HomeScreen;
