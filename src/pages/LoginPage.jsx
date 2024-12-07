import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FormLogin from '../components/FormLogin';
import FormSignUp from '../components/FormSignUp';

const LoginPage = () => {
  return (
    <Routes>
      <Route path="/login" element={<FormLogin />} />
      <Route path="/signup" element={<FormSignUp />} />
    </Routes>
  );
};

export default LoginPage;
