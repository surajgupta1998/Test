import React, { Component, useState, createRef, useEffect } from "react";

import "./chatcontent.css";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      type: "other",
    
      msg: "Hi Suraj, How are you?",
    },
    {
      key: 2,
      msg: "I am fine.",
    },
    {
      key: 3,
      msg: "What about you?",
    },
    {
      key: 4,
      type: "other",
      msg: "I am good too!",
    },
    {
      key: 5,
      type: "other",
      msg: "Where Are You?",
    },
    {
      key: 6,
      msg: "In Bangalore",
    },
    {
      key: 7,
      msg: "Good Bye!!",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
             
              <h4><i class="fas fa-user-tie"></i>Pawan <h6>is Typing....</h6></h4>
            </div>
            
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fas fa-star"></i>
                <i class="fas fa-phone-square-alt"></i>
                <i class="fas fa-video"></i>
                <i class="fas fa-bell"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }}