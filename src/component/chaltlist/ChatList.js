import React, { Component } from "react";
import "./ChatList.css";
import ChatListItems from "./ChatListItems";
import suraj from '../nav/img/suraj.jpeg'
export default class ChatList extends Component {
  allChatUsers = [
    {
      id: 1,
      name: "Ankit Gupta",
      isOnline: true,
      
    },
    {
      id: 2,
      name: "Pawan",
      
    },
    {
      id: 3,
      name: "Pankaj",
      isOnline: true
    },
    {
      id: 4,
      name: "Neeraj"
    },
    {
      id: 5,
      name: "Vidhan",
      isOnline: true
    },
    {
      id: 6,
      name: "Megha",
      
    },
    {
      id: 7,
      name: "Ram",
      
    },
    {
      image:
       {suraj},
      id: 8,
      name: "Ravi",
      
    },
    {
      id: 9,
      name: " Sachin",
      
    },
    {
      id: 10,
      name: "Manpreet ",
    
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
       
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}