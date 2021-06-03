import React, { Component } from "react";
import { Link } from "react-router-dom";

import { apiImageUrl } from "../config.json";

import "../colors.css";
import "./styles/feed.css";

class FeedComponent extends Component {
  state = {};
  render() {
    return (
      <div className="bgBlue mainFeedComponent">
        <div className="header">
          <img src={this.props.avatar} className="avatar" />
          <p className="fgWhite">{this.props.title}</p>
        </div>
        <p className="fgWhite">{this.props.address}</p>
        <p className="fgWhite">
          {this.props.available_rooms} Rooms Available at Price{" "}
          {this.props.room_price} Rs
        </p>
        <img src={`${apiImageUrl}/${this.props.image}`} className="image" />

        <Link
          to={{
            pathname: `/detail/${this.props._id}`,
            state: {
              postid: this.state.postid,
            },
          }}
        >
          <button className="button">
            <span>&#x2764; </span>Check Details
          </button>
        </Link>
      </div>
    );
  }
}

export default FeedComponent;
