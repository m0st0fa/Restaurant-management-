import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoutes = ({ children }) => {
    const [user, loading] = useAuth ()
    const [isAdmin, isAdminLoading] = useAdmin()
    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;