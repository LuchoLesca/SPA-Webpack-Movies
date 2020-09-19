const apiKey = "8ed083af465ff4938a2b7222511a9336";

const getFilms = async (pag) => {
    const page = pag ? pag : 1;
    const url =`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
    try{
        const response = await fetch(url)
        const json = await response.json()
        return json
    }catch(err){
        console.log("Error" + error);
    }
}

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