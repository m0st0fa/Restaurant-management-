import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <h2 className="text-exl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default UserHome;