import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const Home = () => {
    const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <>
            <button onClick={loginWithPopup}>LogIn with PopUp</button>
            <br/>
            <button onClick={loginWithRedirect}>LogIn with Redirect</button>
            <br/>
            <button onClick={() => logout({returnTo: window.location.origin})}>LogOut</button>

            <h3>User is {isAuthenticated ? 'authenticated' : 'not authenticated'}</h3>

            {isAuthenticated && (
                <div>
                    <img src={user.picture} alt={user.name}/>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <br/>
                    <br/>
                    <pre style={{textAlign: "start"}}>{JSON.stringify(user, null, 2)}</pre>
                </div>
            )}
        </>
    );
};

export default Home;
