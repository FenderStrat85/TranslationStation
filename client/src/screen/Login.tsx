import React from 'react';
import LoginForm from '../components/form/LoginForm';
import { Link } from 'react-router-dom';

const LoginScreen = (): JSX.Element => {
  return (
    <div className="LoginScreen">
      <h1>Login Screen</h1>
      <LoginForm />
      <Link to="/auth/register">
        <button title="Register here!">Register Here!</button>
      </Link>
    </div>
  );
};

export default LoginScreen;
