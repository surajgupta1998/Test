import React, { Component } from 'react';
import "./Nav.css"
import massenger from "./img/Messenger.png"; 
import skype from "./img/skype.png";
import talk from "./img/talk.png";
import whatsapp from "./img/WhatsApp-Logo.png";
class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div  className="btn nav_block"><i class="fas1 fas  fa-align-justify"></i></div>
                <div className=" navDiv1">
                <div  id="divMessagnger" className=" nav_block"><img src={massenger} alt="" /></div>
                <div  className=" nav_block"><img src={skype} alt="" /></div>
                <div  className=" nav_block"><img src={talk} alt="" /></div>
                <div  className=" nav_block"><img src={whatsapp} alt="" /></div>
                </div>
                
                
            </div>
        );
    }
}

export default Nav;
