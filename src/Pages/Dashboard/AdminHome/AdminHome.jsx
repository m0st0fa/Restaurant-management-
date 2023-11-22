import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {  FaBook, FaDollarSign, FaUsers } from "react-icons/fa";


const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get('/admin-stats');
                console.log('Query Response:', res.data);
                return res.data;
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
            }
        }
        
    })
    return (
        <div>
            <h2 className=" text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                   <FaDollarSign className=" text-5xl"></FaDollarSign>
                    </div>
                    <div className="stat-title">revenue</div>
                    <div className="stat-value">${stats?.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                   <FaUsers></FaUsers>
                    </div>
                    <div className="stat-title"> total Users</div>
                    <div className="stat-value">{stats?.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                       <FaBook></FaBook>
                    </div>
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{stats?.menuItems}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                       
                    </div>
                    <div className="stat-title">Order</div>
                    <div className="stat-value">{stats?.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;