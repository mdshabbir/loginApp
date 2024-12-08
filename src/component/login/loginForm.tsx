import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LoginSchema } from '../../utils/validation';
import '../../App.css';

const LoginForm: React.FC = () => {
  const [savedCredentials, setSavedCredentials] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  useEffect(() => {
    // Load saved credentials from local storage
    const rememberedEmail = localStorage.getItem('rememberedEmail') || '';
    const rememberedPassword = localStorage.getItem('rememberedPassword') || '';
    setSavedCredentials({ email: rememberedEmail, password: rememberedPassword });
  }, []);

  const handleSubmit = (values: { email: string; password: string; rememberMe: boolean }) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if user exists
    const userExists = users.some(
      (user: { email: string; password: string }) =>
        user.email === values.email && user.password === values.password
    );

    if (userExists) {
      // Save email and password if "Remember Me" is checked
      if (values.rememberMe) {
        localStorage.setItem('rememberedEmail', values.email);
        localStorage.setItem('rememberedPassword', values.password);
      } else {
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberedPassword');
      }
      alert('Login Successful');
    } else {
      alert('Invalid Email or Password');
    }
  };

  return (
    <Formik
      initialValues={{
        email: savedCredentials.email,
        password: savedCredentials.password,
        rememberMe: !!savedCredentials.email, // Prefill "Remember Me" checkbox if credentials exist
      }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className="loginForm">
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" aria-label="Email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" aria-label="Password" />
          <ErrorMessage name="password" component="div" />

          <div>
            <Field id="rememberMe" name="rememberMe" type="checkbox" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
