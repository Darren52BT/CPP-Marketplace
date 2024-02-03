import './LoginPage.css';

function LoginPage() {
    return (
        <div className="wrapper outer">
            <div className="input-box">
                <input type="text" placeholder="Username"/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password"/>
            </div>
            <div className="login-button">
                Login
            </div>
        </div>
    );
}

export default LoginPage;