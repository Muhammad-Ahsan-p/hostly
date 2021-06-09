import React, { Component } from "react";
import { Link } from "react-router-dom";

import { apiImageUrl } from "../config.json";

import "./styles/feed.css";

class FeedComponent extends Component {
  state = {};
  render() {
    return (
      <div className="mainFeedComponent">
        <div className="header">
          <img src={this.props.avatar} className="avatar" />
          <p>{this.props.name}</p>
        </div>

        <p>
          {this.props.title} at Price{" "}
          {this.props.room_price} Rs
        </p>

        <p>{this.props.address}</p>
        
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
