const apiKey = "8ed083af465ff4938a2b7222511a9336";
const urlFilmsList = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

const getFilms = async () => {
    try{
        const response = await fetch(urlFilmsList)
        const json = await response.json()
        return json
    }catch(err){
        console.log("Error" + error);
    }
}

// https://api.themoviedb.org/3/movie/${id}?api_key=https://api.themoviedb.org/3/movie/${id}?api_key=8ed083af465ff4938a2b7222511a9336&language=en-US&language=en-US

const getDataFilm = async (id) => {
    const urlFilm = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    try{
        const response = await fetch(urlFilm)
        const json = await response.json()
        return json
    }catch(err){
        console.log("Error" + error);
    }
}

export {getFilms, getDataFilm};