function FilmCard({ film, onSelect }) {
  return (
    <div className="card">
      <img src={film.image} alt={film.title} width="100%" height="200" />
      <h3>{film.title}</h3>
      <p>Sutradara: {film.director}</p>
      <p>Tahun: {film.release_date}</p>
      <button onClick={() => onSelect(film)}>Lihat Detail</button>
    </div>
  );
}

export default FilmCard;