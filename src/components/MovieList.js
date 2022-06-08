import React from "react";

const MovieList=(props)=>{
return(
    <div className="movie-list-container">
        
        {
        props.movielist.map((movie,id)=>
        <div className="">
              <img className="movie-list-image" src={movie.Poster} alt="movie" ></img>
              <button className="btn-green"  onClick={()=>props.add(movie.imdbID)}>
                Click To Add
            </button>
        </div>      
         )}
    </div>
)
}
export default MovieList;