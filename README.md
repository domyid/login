# Proyek Secure Web Authentication

Proyek ini adalah sistem autentikasi web yang aman, dibangun dengan React untuk bagian front-end dan Go untuk bagian back-end. Sistem ini mengintegrasikan berbagai metode autentikasi, termasuk QR code, OAuth2 (Google), dan kata sandi sementara (STP) untuk meningkatkan keamanan pada situs web statis.

## Daftar Isi

- [Persiapan Awal](#persiapan-awal)
- [Pengembangan](#pengembangan)
- [Deployment](#deployment)
- [Informasi Tambahan](#informasi-tambahan)

## Persiapan Awal

Untuk memulai proyek ini, pertama-tama Anda perlu meng-clone repository dan menginstal semua dependensi yang diperlukan.

```bash
git clone
cd login
npm install
```

## Pengembangan

Untuk memulai server pengembangan, gunakan perintah berikut:

```bash
npm start
```

Perintah ini akan menjalankan aplikasi dalam mode pengembangan. Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihatnya. Halaman akan memuat ulang secara otomatis jika Anda melakukan perubahan. Anda juga akan melihat kesalahan linting di konsol.

## Deployment

1. **Bangun aplikasi untuk produksi** ke dalam folder `build` dengan perintah berikut:

    ```bash
    npm run build
    ```

    Ini akan mengemas React dengan benar dalam mode produksi dan mengoptimalkan build untuk performa terbaik.

2. **Commit perubahan Anda** dengan pesan commit yang deskriptif.

    ```bash
    git add .
    git commit -m "Build untuk deployment: deskripsi fitur Anda"
    ```

3. **Deploy aplikasi menggunakan GitHub Pages** dengan menjalankan perintah:

    ```bash
    npm run deploy
    ```

## Informasi Tambahan

### Pengaturan Lingkungan

Pastikan Anda telah menginstal Node.js dan npm di mesin Anda. Anda bisa mendownload Node.js dan npm dari [sini](https://nodejs.org/).

### Skrip

- `npm start`: Menjalankan aplikasi dalam mode pengembangan.
- `npm run build`: Membangun aplikasi untuk produksi.
- `npm run deploy`: Mendepoy aplikasi ke GitHub Pages.

### Endpoint Penting

- `/auth/login`: Endpoint untuk mengirim nomor telepon dan menerima kata sandi sementara.
- `/auth/verify`: Endpoint untuk memverifikasi kata sandi sementara.
- `/auth/resend`: Endpoint untuk mengirim ulang kata sandi sementara.

### Dependensi Front-End

- **react**: Library JavaScript untuk membangun antarmuka pengguna.
- **react-router-dom**: Binding DOM untuk React Router.
- **sweetalert2**: Pengganti popup box JavaScript yang indah, responsif, dan dapat disesuaikan.
- **react-icons**: Memasukkan ikon populer ke dalam proyek React dengan mudah.
- **react-countdown**: Komponen countdown yang dapat disesuaikan untuk React.
- **js-cookie**: API JavaScript yang sederhana dan ringan untuk menangani cookie.

### Back-End

Back-end dibangun dengan Go dan menyediakan berbagai endpoint autentikasi. Pastikan lingkungan Go Anda telah disiapkan dengan benar, dan server back-end berjalan untuk menangani permintaan dari front-end.
