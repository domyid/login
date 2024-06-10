import React from "react";

const Text = () => {
  return (
    <ol className="space-y-6 w-3/4 lg:w-1/2 lg:px-8 order-2 md:order-1 scale-[0.8]">
      <li className="space-y-[0.7rem]">
        <h4 className="font-bold text-xl">Layanan Login ITB</h4>
        <p className="text-justify">
          Layanan Login ITB merupakan aplikasi berbasis SSO (Single Sign On)
          yang memungkinkan civitas akademika ITB untuk mengakses beberapa
          aplikasi pendukung kegiatan ITB dengan menggunakan satu akun saja
          yaitu ITB Account.
        </p>
      </li>
      <li className="space-y-[0.7rem]">
        <h4 className="font-bold text-xl">Daftar Akun</h4>
        <p className="text-justify">
          Untuk menggunakan Login ITB, Anda harus memiliki ITB Account terlebih
          dahulu. ITB Account dapat dimiliki oleh:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Mahasiswa</li>
          <li>Staf/Dosen yang memiliki NIP</li>
          <li>Staf/Dosen/Peneliti yang tidak memiliki NIP</li>
        </ul>
      </li>
      <li className="space-y-[0.7rem]">
        <h4 className="font-bold text-xl">Lupa Password</h4>
        <p>
          Jika lupa password,
          <button target="_blank" className="text-sky-500 underline">
            silahkan klik link berikut
          </button>
          .
        </p>
      </li>
      <li>
        <h4 className="font-bold text-xl">Peringatan Keamanan</h4>
        <p className="text-justify">
          Demi keamanan, mohon selalu logout dari login.itb.ac.id dan mematikan
          browser jika telah selesai mengakses layanan internet ITB.
        </p>
      </li>
    </ol>
  );
};

export default Text;
