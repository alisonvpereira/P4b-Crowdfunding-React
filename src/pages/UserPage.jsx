import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function UserPage() {
    const [userData, setUserData] = useState([])
        ;
    const { username } = useParams();


    console.log(userData)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data);
        });
    }, [username]);
    return (
        <div id="user-page">
           <img class="user-card" alt="" src="https://library.kissclipart.com/20181001/wbw/kissclipart-gsmnet-ro-clipart-computer-icons-user-avatar-4898c5072537d6e2.png" />
           <div id="user-page-text" >
                <h2>{userData.username}</h2>
                <p>{userData.email}</p>

            </div>
        </div>
    );
}

export default UserPage;