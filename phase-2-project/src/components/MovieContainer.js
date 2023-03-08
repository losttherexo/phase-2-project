import React, {useState} from 'react'
import MovieCard from './MovieCard';

function MovieContainer ({movies, onAddMovie}) {
    
    const [hideAddForm, sethideAddForm] = useState(true)

    const [mForm, setMForm] = useState({
        title: "",
        image: "",
        director: "",
        summary: "",
    });
    
    const movieArray = movies.map(movieObj => 
        <MovieCard key={movieObj.id} {...movieObj}/>
    )

    const addButton = <button onClick={() => sethideAddForm(!hideAddForm)} id='addMovie'>Add Movie</button>

    function handleMovieChange(e){
        setMForm({
            ...mForm,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        const newMovie = {
            title: mForm.title,
            image: mForm.image,
            director: mForm.director,
            summary: mForm.summary,
            likes: 0 ,
        }
        fetch("http://localhost:3001/movies", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newMovie)
        })
        .then(res => res.json())
        .then(onAddMovie)
        setMForm({})
    }
  
    return (
        <div>
            <div className='movieCardContainer'>{movieArray}</div>
            <div className='movieCardContainer'>{addButton}</div>
            <div className='movieCardContainer'>
                    <form className= "form-box" hidden={hideAddForm} id="dinoMovie" onSubmit={handleSubmit}>
                        <h2>Add a New Movie</h2>
                        <input onChange={handleMovieChange} value={mForm.name} name= "title" type="text" placeholder="Movie Title" />
                        <input onChange={handleMovieChange} value={mForm.image}name= "image" type="text" placeholder="Movie Image" />
                        <input onChange={handleMovieChange} value={mForm.director}name= "director" type="text" placeholder="Movie Director" />
                        <input onChange={handleMovieChange} value={mForm.summary}name = "summary" type="text" placeholder="Movie Summary" />
                        <button className="submitB" type="submit">Submit Movie</button>
                    </form>
            </div>
        </div> 
    )
}

export default MovieContainer;