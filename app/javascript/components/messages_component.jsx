import React, { Fragment } from 'react';

const MessagesComponent = () => {
    return (
        <Fragment>
            <div className="col-lg-9 room-chat view-height">
                <h2 align="center">Welcome to the #general channel in austin's room.</h2> 
                <p align="center">This is the beginning of the channel chat history.</p>

                <div className="messages">
                    <div className="message">
                        <h6><b>austin</b></h6>
                        <p className="channel ">Sudo message</p> 
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MessagesComponent;