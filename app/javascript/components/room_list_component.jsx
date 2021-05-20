import React from 'react';
import { Link } from 'react-router-dom';

const RoomListComponent = () => {
    return (
        <div className="col-lg-1 rooms-links view-height">
            <ul>
                <li><Link to="/1">Austin</Link></li>
                <li><Link to="/2">Emily</Link></li>
                <li><Link to="/3">Teej</Link></li>
            </ul>
        </div>
    );
};

export default RoomListComponent;