import React from 'react';

const LoginPage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <main className="form-signin w-50">
        <form className="m-3 p-4 border rounded shadow">
          <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault"> Remember me </label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>

          <p className="mt-4 mb-3 text-body-secondary text-center">&copy; 2017–2024</p>
        </form>
      </main>
    </div>
  );
}

export default LoginPage;
