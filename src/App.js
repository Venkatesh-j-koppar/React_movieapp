import React, { useEffect, useState } from "react";
import Favourites from "./components/Favourites";
import Heading from "./components/Heading";
import MovieList from "./components/MovieList";


const App=()=>{
  const [movieList,setMovieList]=useState([]);
  const [search,setSearch]=useState()
  const [fav,setFav]=useState([]);
  
  
  const getMoviesRequest=async(search)=>{

    const url=`http://www.omdbapi.com/?s=${search}&apikey=61b85b9b`;
   

    const response=await fetch(url);
    const resjson=await response.json();
    if(resjson.Search){
      setMovieList(resjson.Search)
    }
    const storedfav=JSON.parse(localStorage.getItem("favlist"));
    if(storedfav.length>0){

      setFav(storedfav);
    }
   
      
    
    
  }

  const addtofav=(id)=>{
    let flag;
    const newfav=movieList.filter((movie)=>
      movie.imdbID===id)

    const arr1=JSON.parse(localStorage.getItem("favlist"));
    function check(){
      console.log("Inside Check")
    for(let i=0;i<arr1.length;i++){
     
      if(arr1[i].imdbID===newfav[0].imdbID){
        console.log("Inside if")
        return true;
      }

    }
    return false;
  }
  flag=check();
  
    if(flag){
      alert("Movie already present in list")
    }
    else{
      const newfavourites=[...fav,newfav[0]];  
      setFav(newfavourites) 
     
      localStorage.setItem("favlist",JSON.stringify(newfavourites));
    }

  
    
      
    
    }
      
   


  const removefromfav=(id)=>{
   
    const newfav=fav.filter((movie)=>movie.imdbID!==id)
    if(newfav){
      setFav(newfav);
      localStorage.setItem("favlist",JSON.stringify(newfav));

    }
    
  }


  useEffect(()=>{
    getMoviesRequest(search);
  },[search]);

  return(
    <div >
      <Heading header="Movies" seabar={setSearch} value={search} ></Heading>
      <MovieList movielist={movieList} add={addtofav}></MovieList>
      <Favourites favlist={fav} rmfav={removefromfav}></Favourites>
      
    </div>
  )

}
export default App;