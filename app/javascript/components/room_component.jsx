import React from 'react';
import ChannelListComponent from './channel_list_component';

const RoomComponent = () => {
    return (
        <div class="col-lg-10 room-channels view-height">
            <div class="row">
                <div class="room-title">
                    <h6>austin's room</h6>
                </div>
            </div>
            <ChannelListComponent />
        </div>
    );
};

export default RoomComponent;