import React from 'react';
import GambarSatu from '../assets/Ellipse 799.svg';

function Akun() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* Biodata Section */}
        <h2 className="text-center text-2xl font-semibold mb-6">Biodata</h2>
        <div className="bg-gradient-to-r from-third to-fourth p-6 rounded-lg text-white flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <img src={GambarSatu} alt="Profile" className="w-24 h-24 rounded-full mb-2" />
            <button className="bg-white text-green-600 px-4 py-1 rounded-md mt-2 text-sm">Edit biodata saya</button>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="font-bold">Nama Lengkap</p>
                <p>Asep Setiawan</p>
              </div>
              <div>
                <p className="font-bold">Alamat</p>
                <p>Cianjur, Jawa Barat</p>
              </div>
              <div>
                <p className="font-bold">No Telepon</p>
                <p>0857-2323-7827</p>
              </div>
              <div>
                <p className="font-bold">Pendidikan Terakhir</p>
                <p>S1 Pertanian</p>
              </div>
              <div>
                <p className="font-bold">Email</p>
                <p>asepsetiawan@gmail.com</p>
              </div>
              <div>
                <p className="font-bold">Pengalaman Kerja</p>
                <p>-</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <button className="bg-green-200 text-green-800 px-4 py-2 rounded-md text-sm">
            Tambahkan No. Whatsapp agar kamu dapat dihubungi terkait lowongan pekerjaan
          </button>
        </div>

        {/* Informasi Tambahan Section */}
        <h2 className="text-center text-2xl font-semibold mt-10 mb-6">Informasi Tambahan</h2>
        <div className="bg-gradient-to-r from-third to-fourth p-6 rounded-lg text-white">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">TENTANG SAYA</h3>
              <p>
                Nama saya Asep Setiawan, saya berusia 24 tahun dan merupakan lulusan Sarjana Pertanian...
              </p>
              <button className="text-white underline text-sm">Tambahkan deskripsi tentang saya.</button>
            </div>
            <div>
              <h3 className="font-bold text-lg">KEMAMPUAN</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
              <button className="text-white underline text-sm">Tambahkan kemampuan.</button>
            </div>
            <div>
              <h3 className="font-bold text-lg">PENGALAMAN ORGANISASI</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
              <button className="text-white underline text-sm">Tambahkan pengalaman organisasi.</button>
            </div>
            <div>
              <h3 className="font-bold text-lg">PENGHARGAAN & SERTIFIKAT</h3>
              <p>
                Beritahu prestasimu dengan menambahkan penghargaan & sertifikat di sini.
              </p>
              <button className="text-white underline text-sm">Tambahkan penghargaan & sertifikat.</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Akun;
