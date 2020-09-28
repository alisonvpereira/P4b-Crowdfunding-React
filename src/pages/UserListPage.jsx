import React, {useState, useEffect } from "react";
import UserCard from "../components/UserCard/UserCard";
import "../components/UserCard/UserCard.css";


function UserListPage() {
    const [userList, setUserList] = useState([]);
    console.log(userList)
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserList(data);
        });
    }, []);
    return (
        <div id="user-list">
            {userList.map((userData, key) => {
                return <UserCard key={key} userData={userData} />;
            })}
        </div>
    );
}

export default UserListPage;
