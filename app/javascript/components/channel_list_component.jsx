import React from 'react';

const ChannelListComponent = () => {
    return (
        <div className="row all-channels">
            <div className="channels">
                <p className="channel-header">TEXT CHANNELS</p>
                <p className="channel active">#general</p> 
            </div>

            <div className="channels">
                <p className="channel-header">VOICE CHANNELS</p>
                <p className="channel">#coming_soon</p>
            </div>
        </div>
    );
};

export default ChannelListComponent;