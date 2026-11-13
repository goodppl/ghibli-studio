# Studio Ghibli Films - COTS 1 Praktikum Pemrograman Web

Aplikasi web sederhana berbasis React.js dan Vite yang menampilkan daftar film animasi dari Studio Ghibli menggunakan API publik. Proyek ini dibuat untuk memenuhi tugas COTS 1 Praktikum Perancangan dan Pemrograman Web.

## Tentang Tugas

Tugas ini bertujuan untuk membangun aplikasi web menggunakan React.js dengan mengonsumsi REST API publik. Aplikasi ini menampilkan daftar film dalam bentuk card, memiliki fitur pencarian film berdasarkan judul, serta menyediakan modal pop-up untuk melihat informasi detail film.

Base URL: https://ghibliapi.dev

## Kebutuhan Endpoint

- Daftar film: GET /films
- Detail: GET /films/{id}
- Pencarian: Filtering di sisi client terhadap hasil GET /films

Catatan: API ini tidak menyediakan parameter pencarian, sehingga pencarian judul dilakukan dengan memfilter data yang sudah diambil. Detail dapat diambil ulang lewat GET /films/{id} atau diambil dari data daftar yang sudah ada.

## Fitur yang Dibuat

1. Menampilkan daftar film Studio Ghibli dalam bentuk card.
2. Pada setiap card, menampilkan:
   - Poster (image)
   - Judul (title)
   - Sutradara (director)
   - Tahun rilis (release_date)
3. Membuat fitur pencarian film berdasarkan judul.
4. Membuat halaman atau modal detail film.
5. Pada detail, menampilkan:
   - Gambar header (movie_banner)
   - Judul asli (original_title dan original_title_romanised)
   - Deskripsi (description)
   - Sutradara (director)
   - Produser (producer)
   - Tahun rilis (release_date)
   - Durasi (running_time, dalam menit)
   - Skor Rotten Tomatoes (rt_score)


## Pembagian Tugas Kelompok (4 Orang)

1. Kevin: : Mengerjakan file src/service/api.js (Konfigurasi Axios, fungsi getFilms, getFilmById, dan penanganan pesan error).
2. Jati : Mengerjakan file src/App.jsx (Pengelolaan state utama, pemanggilan API dengan useEffect, dan logika filter pencarian).
3. Aditio : Mengerjakan file src/components/FilmCard.jsx (Pembuatan komponen card daftar film dan pengiriman data lewat props).
4. Daviz : Mengerjakan file src/components/FilmModal.jsx dan src/App.css (Pembuatan modal pop-up detail film dan pengaturan styling responsif).

## Cara Menjalankan Aplikasi

1. Buka terminal dan masuk ke folder proyek:
   cd ghibli-studio

2. Install dependensi:
   npm install

3. Jalankan aplikasi:
   npm run dev

4. Buka tautan lokal yang tampil di terminal (misalnya http://localhost:5173/) di browser.
