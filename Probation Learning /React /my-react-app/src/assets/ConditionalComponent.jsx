function ConditionalComponent({ isLoggedIn }) {
  return (
    <div className="conditional-box">
      <h2>
        {isLoggedIn ? "Welcome back, User!" : "Please log in to continue"}
      </h2>
      <p>
        {isLoggedIn
          ? "You have access to all features."
          : "Sign in to access your account and features."
        }
      </p>
      <button>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default ConditionalComponent;