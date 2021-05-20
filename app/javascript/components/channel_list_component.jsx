import React from 'react';

const ChannelListComponent = () => {
    return (
        <div class="row all-channels">
            <div class="channels">
                <p class="channel-header">TEXT CHANNELS</p>
                <p class="channel active">#general</p> 
            </div>

            <div class="channels">
                <p class="channel-header">VOICE CHANNELS</p>
                <p class="channel">#coming_soon</p>
            </div>
        </div>
    );
};

export default ChannelListComponent;