/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || { pathname: '/' };
    

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {
            const result = await signIn(email.value, password.value);
            const user = result.user;

            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown',
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp',
                },
            });

            navigate(from, { replace: true });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="">
                <h2 className="text-3xl my-10 text-center">Place Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    {/* Your form controls */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label"></label>
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <div className="text-center mt-4 ">
                    <p>
                        Do Not Have An Account?
                        <Link className="text-blue-600" to="/signup">
                            Register
                        </Link>
                    </p>
                    <div>
                            <SocialLogin></SocialLogin>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Login;
