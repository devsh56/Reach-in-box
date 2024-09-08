import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.svg";
import Footer from "../Componenets/Footer";
import UpBar from "../Componenets/UpBar";
import "./LoginStyle.css"; // Import the CSS file

function Login() {
    const Navigate = useNavigate();
    const token = localStorage.getItem("token");
    if (token) {
        Navigate("/");
    }
    if (!token) {
        Navigate("/login");
    }
    const handleGoogleLogin = () => {
        window.location.href =
            "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/";
    };

    return (
        <div>
            <UpBar />
            <div className="page-layout">
                <div className="login-container">
                    <div className="login-title">
                        Create a new account
                    </div>
                    <div
                        className="google-login-btn"
                        onClick={handleGoogleLogin}
                    >
                        <img src={google} alt="google" className="google-icon" />
                        Sign Up with Google
                    </div>
                    <div>
                        <Link to="/login" className="create-account-btn">
                            Create an Account
                        </Link>
                        <div className="already-account-text">
                            Already have an account?{" "}
                            <Link to="/sign" className="signin-link">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
