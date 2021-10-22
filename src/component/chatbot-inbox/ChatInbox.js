import React, { Component } from 'react';
import "../chatbot-inbox/ChatInbox.css"
export default class ChatInbox extends Component {
    render() {
        return (
            <div className="border-left">
                <h1>inbox</h1>
                <div className="Chatbot">
                    <div className='Massage'>
                    <div className="btn">All Message</div>
                    <div className="btn">Unread</div>
                    <div className="btn">Important</div>
                    <div className="btn">Draft</div>
                    </div>
                    <div className="Massage">
                    <div className="btn">Teams</div>
                    <div className="btn">Groups</div>
                    <div className="btn">Channels</div>
                    <div className="btn">Location </div>
                    <div className="btn">Mode</div>
                    </div>
                    <div className="Massage">
                    <div className="btn">Help </div>
                    <div className="btn">Setting</div>
                    </div>
                </div>
    
            </div>
        );
    }
}

 
