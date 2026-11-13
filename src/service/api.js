import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ghibliapi.dev',
    timeout: 10000,
});

export const getFilms = async () => {
    const { data } = await api.get('/films');
    return data;
};

export const getFilmById = async (id) => {
    const { data } = await api.get(`/films/${id}`);
    return data;
};

export const getErrorMessage = (err) => {
    if (err.code === 'ECONNABORTED') return 'Server terlalu lama merespons. Coba lagi.';
    if (!err.response) return 'Tidak ada koneksi internet atau server tidak dapat dijangkau.';
    if (err.response.status === 404) return 'Data film tidak ditemukan di server.';
    return `Terjadi kesalahan pada server (kode ${err.response.status}).`;
};