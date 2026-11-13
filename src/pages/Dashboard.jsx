import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import CardFilm from '../components/CardFilm';
import StatusMessage from '../components/StatusMessage';
import { getFilms, getErrorMessage } from '../services/api';

function Dashboard() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function loadFilms() {
      try {
        const data = await getFilms();
        setFilms(data);
      } catch (err) {
        setError(getErrorMessage(err));
      } finally {
        setLoading(false);
      }
    }
    loadFilms();
  }, []);

  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="dashboard">
      <h1>Studio Ghibli Films</h1>
      <SearchBar value={query} onChange={setQuery} />
      {loading && <StatusMessage type="loading" text="Memuat data film..." />}
      {error && <StatusMessage type="error" text={error} />}
      {!loading && !error && filteredFilms.length === 0 && (
        <StatusMessage
          type="empty"
          text={`Film dengan kata kunci "${query}" tidak ditemukan`}
        />
      )}
      <div className="film-grid">
        {filteredFilms.map((film) => (
          <CardFilm key={film.id} film={film} />
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
