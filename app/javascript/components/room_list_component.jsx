import React from 'react';
import { Link } from 'react-router-dom';

const RoomListComponent = () => {
    return (
        <div className="col-lg-1 rooms-links view-height">
            <div className="row">
                <Link to="/1">
                    <div className="room-button">A</div>
                </Link>
            </div>
            <div className="row">
                <Link to="/2">
                    <div className="room-button">E</div>
                </Link>
            </div>
            <div className="row">
                <Link to="/3">
                    <div className="room-button">T</div>
                </Link>
            </div>
        </div>
    );
};

export default RoomListComponent;