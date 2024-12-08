# Project Name: React Authentication System with Form Validation

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Design Choices](#design-choices)
- [Assumptions and Limitations](#assumptions-and-limitations)
- [Future Improvements](#future-improvements)

## Introduction

This project is a React application that includes Sign Up and Login forms with form validation using Formik and Yup. It features:

- Password strength meter for the Sign Up form.
- "Remember Me" functionality in the Login form.
- User authentication with local storage to persist user data.

## Features

- **Sign Up Form**:

  - Validates the email format and password strength.
  - Saves new user credentials to local storage.
  - Displays success message upon successful sign-up.

- **Login Form**:
  - Validates the email format and password.
  - Checks if the entered credentials match the existing ones in local storage.
  - "Remember Me" feature to save the email and pre-fill the password on subsequent logins.
  - Displays success or error messages based on the login attempt.

## Prerequisites

To run the project, you need:

- Node.js and npm (or yarn) installed on your system.
- Basic knowledge of React, Formik, Yup, and local storage usage.

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

## To run the project use command : npm run dev
