import { useState, useEffect } from "react";
import { getFilms, getErrorMessage } from "./service/api";
import FilmCard from "./components/FilmCard";
import FilmModal from "./components/FilmModal";
import "./App.css";

function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedFilm, setSelectedFilm] = useState(null);

  const ambilData = () => {
    setLoading(true);
    setError(null);
    getFilms()
      .then((data) => setFilms(data))
      .catch((err) => setError(getErrorMessage(err)))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getFilms()
      .then((data) => setFilms(data))
      .catch((err) => setError(getErrorMessage(err)))
      .finally(() => setLoading(false));
  }, []);

  const dataFilter = films.filter((f) =>
    f.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Daftar Film Studio Ghibli</h1>

      <div className="search-area">
        <input
          type="text"
          placeholder="Cari judul film..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && <button onClick={() => setSearch("")}>Reset</button>}
      </div>

      {loading && <p>Loading data...</p>}

      {error && (
        <div>
          <p>Terjadi error: {error}</p>
          <button onClick={ambilData}>Coba Lagi</button>
        </div>
      )}

      {!loading && !error && dataFilter.length === 0 && (
        <p>Data tidak ditemukan.</p>
      )}

      {!loading && !error && (
        <div className="grid">
          {dataFilter.map((item) => (
            <FilmCard key={item.id} film={item} onSelect={setSelectedFilm} />
          ))}
        </div>
      )}

      {selectedFilm && (
        <FilmModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />
      )}
    </div>
  );
}

export default App;