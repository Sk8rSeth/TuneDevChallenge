import React from 'react'
import logData from "../content/logs.json"
import userData from "../content/users.json"

export default class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="user-card cell small-12 medium-4">
                <div className="user-info-container grid-x">
                    <div className="profile-img cell small-3">pic</div>
                    <div className="name-container cell small-9">
                        <div className="name">rando guy</div>
                        <div className="position">rando position</div>
                    </div>
                </div>
            </div>
        )
    }
}