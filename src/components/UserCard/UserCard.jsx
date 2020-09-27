import React from "react";
import { Link } from "react-router-dom";

function UserCard(props) {
    //variables
    const { userData } = props;

    //template
    return (
        <div className="user-card">
        <Link to={`/users/${userData.username}`}>
            <img alt="" src="https://library.kissclipart.com/20181001/wbw/kissclipart-gsmnet-ro-clipart-computer-icons-user-avatar-4898c5072537d6e2.png" />
            <h3 style={{margin:"0"}}>{userData.username}</h3>
        </Link>
        </div>
    );
}

export default UserCard;