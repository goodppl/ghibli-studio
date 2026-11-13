function CardFilm({ film }) {
  return (
    <div className="card-film">
      <img src={film.image} alt={film.title} loading="lazy" />
      <div className="card-body">
        <h2>{film.title}</h2>
        <p className="card-info">
          {film.release_date} &bull; Skor: {film.rt_score}%
        </p>
        <p className="card-desc">{film.description}</p>
      </div>
    </div>
  );
}

export default CardFilm;
