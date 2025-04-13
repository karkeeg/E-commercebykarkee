import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!user.email || !user.password) {
      setError("Both fields are required");
      return;
    }

    // Dummy authentication (replace with API call later)
    if (user.email === "user@example.com" && user.password === "123456") {
      localStorage.setItem("loginAuth", JSON.stringify(user));
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <main className="form-signin w-50">
        <form className="m-3 p-4 border rounded shadow" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

          {error && (
            <div className="alert alert-danger py-2 text-center">{error}</div>
          )}

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              id="floatingPassword"
              placeholder="Password"
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>

          <Link
            to="/signup"
            className="btn btn-outline-secondary w-100 py-2 mt-3"
          >
            Sign Up
          </Link>

          <p className="mt-4 mb-3 text-body-secondary text-center">
            &copy; 2017–2024
          </p>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
