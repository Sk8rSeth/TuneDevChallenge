import React from 'react'
import LogChart from './logChart'

function checkUrl(url) {
    // this whole function can be executed in browser so i have no way to get rid of the '403' errors in image urls from the given json
    let checked = true;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(url){
        if (request.status == 200) {
            return true;
        } 
    };
    request.open('GET', url, true);
    request.send();
    return checked;
}

function getAvatar(user) {
    
    if(user.avatar) {
        let checked = checkUrl(user.avatar);
        if(checked === true){
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

const UserCard = ({user, theme}) => (
    <div className={'user-card user-id-' + user.id +' '+ theme}>
        <div className="user-info-container">
        <div className="profile-img">{getAvatar(user)}</div>
            <div className="name-container">
                <div className="name">{user.name}</div>
                <div className="position">{user.occupation}</div>
            </div>
        </div>
        <LogChart id={user.id} theme={theme} />
    </div>
)

export default UserCard;
