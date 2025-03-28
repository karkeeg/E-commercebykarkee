import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const SignUp = () => {
  return (
    <>
      <Formik>
        initialvalues={{
          email:"",
          password:""
        }}
        
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="p-4 border rounded" style={{ width: '100%', maxWidth: '400px' }}>
            <Form>
              <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

              <div className="form-floating mb-3">
                <Field
                  type="email"
                  className="form-control border border-primary"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                />
                <label htmlFor="floatingInput">Email address</label>
                <ErrorMessage name='email'>
                  {
                    (msg) => <div className='text-danger'>{msg}</div>
                  }
                </ErrorMessage>
              </div>

              <div className="form-floating mb-3">
                <Field
                  type="password"
                  className="form-control border border-primary"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                />
                <label htmlFor="floatingPassword">Password</label>
                <ErrorMessage name='password'>
                  {
                    (msg) => <div className='text-danger'>{msg}</div>
                  }
                </ErrorMessage>
              </div>

              <button className="btn btn-primary w-100 py-2" type="submit">
                Sign Up
              </button>
            </Form>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default SignUp;
