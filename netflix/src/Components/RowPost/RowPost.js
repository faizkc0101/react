import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../constanats/constants";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, seturlId] = useState("");

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
      });
  }, [props.url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars:{
      autoplay:1,
    }
  };

  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data && response.data.results && response.data.results.length !== 0) {
          seturlId(response.data.results[0].key);
        } else {
          console.log("No videos available for this movie");
        }
      })
      .catch((err) => {
        console.error("Error fetching movie videos:", err);
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            key={obj.id}
            onClick={() => handleMovie(obj.id)}
            className={props.isSamll ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>

      {urlId && <YouTube opts={opts} videoId={urlId} />}
    </div>
  );
}

export default RowPost;

