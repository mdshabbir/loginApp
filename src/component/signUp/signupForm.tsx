import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignUpSchema } from '../../utils/validation';
import { getPasswordStrength } from '../../utils/passwordStrength';
import '../../App.css';

const SignUpForm: React.FC = () => {
  const [passwordStrength, setPasswordStrength] = useState('');

  const handlePasswordChange = (password: string) => {
    setPasswordStrength(getPasswordStrength(password));
  };

  const handleSubmit = (values: { email: string; password: string }) => {
    // Save user credentials in local storage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(values);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Sign Up Successful');
  };

  const getStrengthValue = (): number => {
    if (passwordStrength === 'Weak') return 25;
    if (passwordStrength === 'Moderate') return 50;
    if (passwordStrength === 'Strong') return 100;
    return 0;
  };

  const getStrengthColor = (): string => {
    if (passwordStrength === 'Weak') return 'red';
    if (passwordStrength === 'Moderate') return 'orange';
    if (passwordStrength === 'Strong') return 'green';
    return '#ccc';
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignUpSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form >
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" aria-label="Email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            aria-label="Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value;
              setFieldValue('password', value);
              handlePasswordChange(value);
            }}
          />
          <ErrorMessage name="password" component="div" />

          <div className="password-strength-meter">
            <div
              className="password-strength-bar"
              style={{
                width: `${getStrengthValue()}%`,
                backgroundColor: getStrengthColor(),
              }}
            ></div>
          </div>
          <div>Password Strength: {passwordStrength}</div>

          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
