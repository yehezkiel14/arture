import React from 'react';

const Pertanyaan = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-bold mb-4">Ajukan Pertanyaan?</h2>
          <p className="mb-4">
            Ajukan pertanyaan Anda di sini, dan dapatkan jawaban dari para profesional serta komunitas aktif kami.
          </p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded">Tanya Sekarang</button>
        </div>

        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-bold mb-4">Pengguna Teraktif</h2>
          <ul>
            <li className="mb-2">Nama User Pekerjaan - 143 Jawaban</li>
            <li className="mb-2">Nama User Pekerjaan - 120 Jawaban</li>
            <li className="mb-2">Nama User Pekerjaan - 98 Jawaban</li>
          </ul>
        </div>
      </div>

      {/* Bagian Diskusi Populer */}
      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-xl font-bold mb-4">Diskusi Populer</h2>
        {[...Array(4)].map((_, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <div className="flex items-center mb-2">
              <div className="bg-gray-300 rounded-full h-10 w-10 mr-4"></div>
              <div>
                <p className="font-bold">Nama User</p>
                <p className="text-sm text-gray-600">Pekerjaan</p>
              </div>
            </div>
            <p className="mb-4">
              Rhoncus mattis et augue nec, in id ullamcorper at sit. Condimentum sit nunc in aces scelerisque sed. Commodo in viverra nunc ullamcorper ut. Non amet, aliquet scelerisque nullam sagittis pulvinar. Fermentum scelerisque sit consectetur hoc mi. Mollis leo eleifend ultricies purus iaculis.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-green-500">25 Jawaban</span>
              <button className="text-blue-500">Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pertanyaan;
