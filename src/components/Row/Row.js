import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movie, setMovie] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const request = await axios.get(fetchUrl);
    setMovie(request.data.results);
  }

  return (
    <div className="row">
      <h1>{title} </h1>
      <div className="row_posters">
        
        {movie?.map((movie) =>
          movie?.poster_path && movie?.backdrop_path ? (
            <img
              // className={`row_poster ${isLargeRow && "rowPoster_large"}`}
              className={`row_poster`}
              key={movie.id}
              src={`${base_url}${
                 movie?.poster_path 
              }`}
              alt={movie?.name}
            />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Row;