import React from 'react'
import logData from "../content/logs.json"

function checkUrl(url) {
    var checker = new XMLHttpRequest();
    // opens the file with get method, async=true
    checker.open('HEAD', url, true);
    if(checker.status == 200) {
        return true;
    }
    return false;
}
function getAvatar(user) {
    if(user.avatar) {
        // adding in this check because some given json urls are bad
        checkUrl(user.avatar);
        if(checkUrl){
            return (<img src={user.avatar} alt={user.name + ' Profile Image'} />);
        } else {
            var single = user.name.charAt(0);
            return (<div className="default-img"><span>{'1'+single}</span></div>);
        }
    } else {
        var letter = user.name.charAt(0);
        return (<div className="default-img"><span>{letter}</span></div>);
    }
}



const UserCard = ({user}) => (

    <div className={'user-card user-id-' + user.id}>
        <div className="user-info-container">
        <div className="profile-img">{getAvatar(user)}</div>
            <div className="name-container">
                <div className="name">{user.name}</div>
                <div className="position">{user.occupation}</div>
            </div>
        </div>
        <div className="stats-container">
            <div className="graph-container">

            </div>
            <div className="stats">

            </div>
        </div>
    </div>
)

export default UserCard;
