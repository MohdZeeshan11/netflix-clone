import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from "./axios";

import './Row.css';

const baseurl = 'https://image.tmdb.org/t/p/original';

function Row({title,fetchUrl,isLargeRow}) {

    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

    //making a api call 
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // if we use [], run once and don't run agin, here we have to make a call for every row  so that's why we use dependencies [fetchUrl] because if every time fetchUrl change it make a call
  }, [fetchUrl]);
    
    const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    console.log("click on " + movie.name);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
      .then((url) => {
          // getting the trailer id
          // https://www.youtube.com/watch?v=KBtk5FUeJbk
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.error(error));
    }
  };
  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
            {movies.map(movie=> (
                <img 
                key={movie.id}
                onClick={()=>handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${baseurl}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                alt={movie.name}/>))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row;