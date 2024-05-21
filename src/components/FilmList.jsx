import React, {useState, useEffect} from 'react';

function FilmList() {

const [films, setFilms] = useState([]);

useEffect(()=> {
fetch("http://localhost:3000/films")
.then((r) => r.json())
.then((data) => {console.log("Displaing movies..."); 
    setFilms(data);
});
}, []);


const removeFilm = (filmId) => {
    fetch(`http://localhost:3000/films/${filmId}`, {
method: "DELETE",
    })
    .then (() => {
        setFilms(films.filter(film => film.id !== filmId));
    })
    . catch(error => console.error("Error deleting film:", error))
}

    return (  
        <>
        <div>
            <h1>Movie Titles</h1>
                    {films.map(film => (
                    <div key={film.id}> 
                        <h4> {film.title} </h4>
                        <button onClick={() => removeFilm(film.id)}>Delete</button>
                    </div>
                    ))}
        </div>
    
        </>
    );
}

export default FilmList;


//json-server --watch src/data/db.json
