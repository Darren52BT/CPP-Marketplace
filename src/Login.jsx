

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleLogin = () => {
      // Implement your authentication logic here
      // For simplicity, this example considers login successful if both fields are non-empty
      if (username && password) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    };
  
    return (
      <div className="App">
        {loggedIn ? (
          <div>
            <h2>Welcome, {username}!</h2>
            <p>You are now logged in.</p>
          </div>
        ) : (
          <div>
            <h2>Login</h2>
            <form>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <button type="button" onClick={handleLogin}>
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    );
  };

export default Login;