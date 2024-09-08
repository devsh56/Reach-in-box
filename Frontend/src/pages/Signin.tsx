import { Link, useNavigate } from "react-router-dom";
import Footer from "../Componenets/Footer";
import UpBar from "../Componenets/UpBar";
import "./SigninStyle.css"; // This will contain the converted normal CSS

function Signin() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if (token) {
        navigate("/");
    }
    if (!token) {
        navigate("/signin");
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle form submission (name, email, address)
        navigate("/login");
    };

    return (
        <div>
            <UpBar />
            <div className="page-layout">
                <div className="login-container">
                    <div className="login-title">
                        Sign in to your account
                    </div>

                    {/* Form for Name, Email, and Address */}
                    <form onSubmit={handleSubmit} className="form-style">
                        <div>
                            <label className="label-style" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="input-style"
                                required
                            />
                        </div>

                        <div>
                            <label className="label-style" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="input-style"
                                required
                            />
                        </div>

                        <div>
                            <label className="label-style" htmlFor="address">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                placeholder="Enter your address"
                                className="input-style"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="create-account-btn"
                        >
                            Proceed to Sign In
                        </button>
                    </form>

                    <div className="already-account-text">
                        Already have an account?{" "}
                        <Link to="/login" className="signin-link">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signin;
