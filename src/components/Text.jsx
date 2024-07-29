import React from "react";

const Text = () => {
  return (
    <div className="flex flex-col justify-center w-3/4 scale-[0.89] lg:max-w-md md:order-1 order-2">
      <h1 className="text-4xl font-extrabold text-center lg:text-left py-6">
        Panduan Pengguna
      </h1>

      <div className="py-2">
        <h2 className="text-2xl font-bold">1. Pilih Metode Autentikasi</h2>
        <p>Pilih metode autentikasi yang diinginkan:</p>
        <ul className="list-disc pl-6">
          <li>QR code</li>
          <li>OAuth2 (Google)</li>
          <li>Short Temporary Password (STP)</li>
        </ul>
      </div>

      <div className="py-2">
        <h2 className="text-2xl font-bold">2. Autentikasi dengan QR Code</h2>
        <p className="text-justify">
          Jika memilih QR code, pindai kode QR yang ditampilkan di layar
          menggunakan perangkat mobile Anda.
        </p>
      </div>

      <div className="py-2">
        <h2 className="text-2xl font-bold">3. Autentikasi dengan OAuth2</h2>
        <p className="text-justify">
          Jika memilih OAuth2, klik tombol "Sign in with Google" dan ikuti
          instruksi untuk masuk menggunakan akun Google Anda.
        </p>
      </div>

      <div className="py-2">
        <h2 className="text-2xl font-bold">4. Autentikasi dengan STP</h2>
        <p className="text-justify">
          Jika memilih STP, masukkan nomor handphone Anda pada kolom yang
          disediakan, kemudian tekan tombol "Kirim".
        </p>
      </div>

      <div className="py-2">
        <h2 className="text-2xl font-bold">5. Masukkan Password Sementara</h2>
        <p className="text-justify">
          Anda akan menerima password sementara melalui WhatsApp. Masukkan
          password tersebut pada halaman autentikasi dalam waktu 4 menit.
        </p>
      </div>
    </div>
  );
};

export default Text;
