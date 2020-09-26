import React from "react";
import { useHistory } from "react-router-dom";


function Logout() {
    const history = useHistory();

    const handleLogout = () => {
            localStorage.clear()
            history.push("/Login");
            window.location.reload();
        }

    
    


    
return (
    <form>
        <h4>Are you sure you want to Logout?</h4>
        <button type="submit" onClick={handleLogout}>logout</button>
    </form>
    )
};
export default Logout;
