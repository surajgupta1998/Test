import React, { Component } from "react";
import "./userProfile.css";
import suraj from '../nav/img/suraj.jpeg'

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          
          <div className="profile__image">
            <img src={suraj} />
          </div>
          <h4>Suraj Gupta</h4>
          <p>Soft Engineer</p>
        </div>
        <div className="">
          <div className="profile__card" >
            <h5>Nick Name</h5> <span>suraj</span><br/>
            <h5>Tel</h5> <span>1234444</span><br/>
            <h5>Gender</h5> <span>Male</span><br/>
            <h5>Language</h5> <span>Eng</span>
           
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
}