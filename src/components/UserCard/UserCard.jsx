import React from "react";
import { Link } from "react-router-dom";

function UserCard(props) {
    //variables
    const { userData } = props;

    //template
    return (
        <div className="user-card">
        <Link to={`/users/${userData.username}`}>
            <img alt="" src={userData.image}/>
            <h3 style={{margin:"0"}}>{userData.username}</h3>
        </Link>
        </div>
    );
}

export default UserCard;