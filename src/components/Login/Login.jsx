import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {

    const { signIn, } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [showPassword,setShowPassword]=useState(false)
    const navigate = useNavigate();

    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('');
        signIn(email, password)
            .then(()=>{
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="bg-base-200">
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-violet-400">
                        <form className="card-body" onSubmit={handleLogin}>
                            {
                                error && <p className="text-red-500 bg-white p-1 rounded-full">{error}</p>
                            }
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword?"text":"password"}
                                 name="password" placeholder="Password" className="input input-bordered " required />
                                <p onClick={()=> setShowPassword(!showPassword)} className="absolute right-1 top-12 text-xl">{showPassword ? <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}
                                </p>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-violet-500 hover:bg-violet-600 text-white">Login</button>
                                <p>Do not have any accout? please <Link to="/register" className="font-bold text-blue-600">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;