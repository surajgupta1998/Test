import React, { Component } from 'react';
import "./Chat.css"
import ChatList from "../chaltlist/ChatList";
import Uerprofile from "../userprofile/UserProfile";
import ChatContent from "../chatcontent/ChatContent";
// import ChatInbox from "../chatbot-inbox/ChatInbox";
import ChatInbox from '../chatbot-inbox/ChatInbox';
class Chat extends Component {
    render() {
        return (
            <div className="main__chatbody">
                <ChatInbox/>
                <ChatList/>   

                <ChatContent/>
                { <Uerprofile/> }
            </div>
        );
    }
}

export default Chat;
