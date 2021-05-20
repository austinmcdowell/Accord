import React, { Fragment } from 'react';
import MessagesComponent from './messages_component';
import UserListComponent from './user_list_component';

const ChannelComponent = () => {
    return (
        <Fragment>
            <div class="row room-settings">
                <h6>#general</h6>
            </div>
            <div class="row">
                <MessagesComponent />
                <UserListComponent />
            </div>
        </Fragment>
    );
};

export default ChannelComponent;