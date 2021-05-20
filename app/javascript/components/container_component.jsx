import React from 'react';
import RoomListComponent from './room_list_component';
import RoomComponent from './room_component';
import ChannelComponent from './channel_component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const ContainerComponent = () => {
    return (
        <div className="dashboard">
            <div className="row">
                <div className="col-lg-12 rooms">
                    <div className="row no-margin">
                        <Router>
                            <RoomListComponent />
                            <Switch path="1">
                                <Route path="/1">
                                    <RoomComponent name="austin"/>
                                </Route>
                                <Route path="/2">
                                    <RoomComponent name="emily"/>
                                </Route>
                                <Route path="/3">
                                    <RoomComponent name="teej"/>
                                </Route>
                            </Switch>
                            <RoomComponent name="austin"/>
                        </Router>
                    </div>                        
                </div>
            </div>
        </div>
    );
};

export default ContainerComponent;