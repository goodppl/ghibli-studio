import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://ghibliapi.dev/films");
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 min-h-screen bg-gray-100">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative flex flex-col bg-white rounded-2xl p-6 pb-14 min-h-[360px] shadow">
          <div className="flex justify-center items-center h-60">
            <img
              src={item.image}
              alt={item.title}
              className="h-full object-contain"
            />
          </div>

          <h2 className="text-lg font-semibold mt-4 line-clamp-1">
            {item.title}
          </h2>

          <p className="mt-1 text-gray-500 text-sm line-clamp-3 text-justify">
            {item.description}
          </p>

          <div className="absolute bottom-0 right-0 bg-gray-900 text-white px-4 py-2 rounded-tl-xl rounded-br-2xl text-xs font-semibold">
            Score: {item.rt_score}%
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
