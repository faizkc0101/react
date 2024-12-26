import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY,imageUrl } from "../../constanats/constants";

function Banner() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]);
        
        setMovie(response.data.results[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}
    className="banner">
      <div className="content">
        {loading ? (
          <h1 className="title">Loading...</h1>
        ) : movie ? (
          <>
            <h1 className="title">{movie.title || movie.name}</h1>
            <div className="banner_buttons">
              <button className="button">Play</button>
              <button className="button">My List</button>
            </div>
            <h1 className="description">{movie.overview}</h1>
          </>
        ) : (
          <h1 className="title">No movie found</h1>
        )}
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;



// import React,{useEffect, useState} from 'react'
// import './Banner.css'
// import axios from '../../axios';
// import { API_KEY } from '../../constanats/constants';

// function Banner() {
//   const [movie, setMovie] = useState()
//   useEffect(() => {
//      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
//       console.log(response.data.results[1]);
//       setMovie(response.data.results[1])
      
//      })
    
//   }, []);
//   return (
//     <div className='banner'>
//         <div className="content">
//             <h1 className='title'>{ movie ? movie.titie || movie.name: ""}</h1>
//             <div className="banner_buttons">
//                 <button className='button'>Play</button>
//                 <button className='button'>My list</button>
//             </div>
//             <h1 className='description'>To add an alert when a  within the 
//                 onClick handler for the delete icon. The alert will notify                
//                  the item must be checked before it can be deleted.</h1>
//         </div>
//         <div className="fade_bottom"></div>
      
//     </div>
//   )
// }

// export default Banner
