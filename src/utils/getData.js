const apiKey = "8ed083af465ff4938a2b7222511a9336";

const getFilms = async () => {
    const url =`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`;
    try{
        const response = await fetch(url)
        const json = await response.json()
        return json
    }catch(err){
        console.log("Error" + error);
    }
}

// https://api.themoviedb.org/3/movie/${id}?api_key=https://api.themoviedb.org/3/movie/${id}?api_key=8ed083af465ff4938a2b7222511a9336&language=en-US&language=en-US

const getDataFilm = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    try{
        const response = await fetch(url)
        const json = await response.json()
        return json
    }catch(err){
        console.log("Error" + error);
    }
}


const getCast = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
    try{
        const response = await fetch(url)
        const json = await response.json()
        return json
    }catch(err){
        console.log("Error" + error);
    }
}


export {getFilms, getDataFilm, getCast};