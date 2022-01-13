import React from 'react'
import { Redirect, Route } from "react-router-dom";


const AdminRoute = (props) => {
    var authusers = JSON.parse(localStorage.getItem("authuser"));
    console.log(authusers[0].role);
    if(authusers && authusers[0].role === 'admin'){
        console.log(authusers[0].role);
        console.log(props);
        return <Route to={props} />
    }
    return <Route to="/" />    
}

export default AdminRoute;
