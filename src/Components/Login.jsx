import "../Style/Loginpage.css";

const LoginModal = ({ close }) => {
  return (
    <div className="login-overlay" onClick={close}>
      <div className="login-box" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <span className="close-btn" onClick={close}>✕</span>

        <h2 className="login-title">Login</h2>

        <input
          type="text"
          placeholder="Username or Email Address *"
          className="login-input"
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />

        <div className="login-options">
          <label className="remember">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <span className="forgot">Forgot your password?</span>
        </div>

        <div className="login-buttons">
          <button className="animated-btn login-btn">Login</button>
          <button className="animated-btn register-btn">Register</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
