import { useContext } from "react";
import { Outlet, Navigate } from "react-router";

function ProtectedRoute({children, isAllowed, redirectTo="/home"}) {
    
    if(!isAllowed){
        return <Navigate to={redirectTo}/>
    }
    return children ? children : <Outlet/>
}

export default ProtectedRoute;