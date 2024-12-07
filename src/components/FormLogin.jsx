import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-md rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-third to-fourth w-1/2 flex justify-center items-center p-8">
          <img src="./Humans.png" alt="human" className='w-full h-auto' />
        </div>
        <div className="bg-white w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Masuk Sekarang</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="namaLengkap">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="namaLengkap"
                placeholder="Masukkan nama kamu"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan e-mail kamu"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Kata Sandi
              </label>
              <input
                type="password"
                id="password"
                placeholder="Masukkan kata sandi kamu"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">Masuk</button>
          </form>
          <p className="mt-4 text-center text-sm">
            <a href="#" className="text-blue-500 hover:underline">Lupa kata sandi?</a>
          </p>
          <div className="mt-6 flex justify-between items-center">
            <button className="bg-red-500 text-white py-2 px-4 rounded flex-1 mr-2">Daftar dengan Google</button>
            <button className="bg-black text-white py-2 px-4 rounded flex-1 ml-2">Daftar dengan Apple</button>
          </div>
          <p className="mt-4 text-center text-sm">
            Belum punya akun? <button onClick={handleSignUpClick} className="text-blue-500 hover:underline">Daftar</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
