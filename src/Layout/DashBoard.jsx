import {  FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { IoMenu } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import useCart from "../hooks/useCart";



const DashBoard = () => {
    const [cart] = useCart()
    // TODO: GET THE ADMIN VALUE FROM THE DATABASE 
    const isAdmin = true;


    return (
        <div className="flex ">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen text-black bg-orange-400">
                <ul className="menu p-4 ">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome">
                                        <FaHome />
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItems">
                                        <FaUtensils />
                                        Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/mangeItems">
                                        <FaList />
                                       Mange Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaBook />
                                        Manage Booking
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users">
                                        <FaUsers />
                                       All users
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome />
                                        user Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar />
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart />
                                        My cart({cart.length})
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FcRating />
                                        Add a Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaList />
                                        My Booking
                                    </NavLink>
                                </li>
                            </>
                    }

                    {/* Shared Nav Links */}
                    <div className=" divider">

                    </div>
                    <li>
                        <NavLink to="/">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <IoMenu />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <CiShop />
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <MdContactMail />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content  */}
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;