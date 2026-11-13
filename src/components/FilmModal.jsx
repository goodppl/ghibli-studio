function FilmModal({ film, onClose }) {
    return (
      <div className="modal">
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>X</button>
          <img src={film.movie_banner} alt={film.title} width="100%" height="150" />
          <h2>{film.title}</h2>
          <p><b>Judul Asli:</b> {film.original_title} ({film.original_title_romanised})</p>
          <p><b>Sutradara:</b> {film.director}</p>
          <p><b>Produser:</b> {film.producer}</p>
          <p><b>Tahun Rilis:</b> {film.release_date}</p>
          <p><b>Durasi:</b> {film.running_time} menit</p>
          <p><b>Skor Rotten Tomatoes:</b> {film.rt_score}%</p>
          <p><b>Deskripsi:</b> {film.description}</p>
          <button onClick={onClose}>Tutup</button>
        </div>
      </div>
    );
  }
  
  export default FilmModal;
  