import React, { Fragment } from 'react';
import ChannelListComponent from './channel_list_component';
import ChannelComponent from './channel_component';

const RoomComponent = (props) => {
    return (
        <Fragment>
            <div className="col-lg-2 room-channels view-height">
                <div className="row">
                    <div className="room-title">
                        <h6>{props.name}'s room</h6>
                    </div>
                </div>
                <ChannelListComponent />
            </div>
            <div className="col-lg-9 room">
                <ChannelComponent />
            </div>
        </Fragment>
        
        
    );
};

export default RoomComponent;