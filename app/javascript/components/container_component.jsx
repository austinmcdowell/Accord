import React from 'react';
import RoomListComponent from './room_list_component';
import RoomComponent from './room_component';
import ChannelComponent from './channel_component';

const ContainerComponent = () => {
    return (
        <div class="container-fluid dashboard">
            <div class="row">
                <div class="col-lg-3 rooms">
                    <div class="row">
                        <RoomListComponent />
                        <RoomComponent />
                    </div>
                </div>

                <div class="col-lg-9 room">
                    <ChannelComponent />
                </div>
            </div>
        </div>
    );
};

export default ContainerComponent;