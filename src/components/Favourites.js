import React from "react";

const Favourites=(props)=>{




    return(
        <>
        <h1>Favourites</h1>
        <div className="movie-fav-container">
            {
            props.favlist.map((movie,id)=>
            <div className="img-footer">
                <img  className="movie-list-image" key={id} src={movie.Poster} alt="movie">
                </img>
            
                <button className="btn" onClick={()=>props.rmfav(movie.imdbID)} >
                    Click To Delete
                </button>
               
            </div>)
             }
            
        </div>
        
        </>
    )
}
export default Favourites;