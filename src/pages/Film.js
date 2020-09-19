import getHash from '../utils/getHash'
import { getDataFilm, getCast } from '../utils/getData';

const Film = async() => {

    const id = getHash().slice(1);
    const film = await getDataFilm(id);
    const cast = await getCast(id);
    
    const view = `
        <div class="film-view">
            <div class="film_bg-img-container">
                <img src="http://image.tmdb.org/t/p/original${film.backdrop_path}" class="film_bg-img">
            </div>
            <div class="film-content">
                <div class="poster-wrapper">
                    <div class="poster">
                        <img src="https://image.tmdb.org/t/p/original${film.poster_path}" class="poster_img">
                    </div>
                    <div class="poster-bottom">
                    </div>
                </div>
                <div class="header-poster-wrapper">
                    <section class="header-poster">
                        <div class="title-content">
                            <h1 class="title">${film.title}(2019)</h1>
                            <h2 class="facts">TV-MA Sci-Fi & Fantasy, Action & Adventure * 1h</h2>
                        </div>
                        <div class="chart-content">
                            <h1 class="score">${film.vote_average*10}%</h1>
                            <h2 class="score-text">User score</h2>
                        </div>
                        <div class="header_info">
                            <h3 class="tagname">${film.tagline}</h3>
                            <h1 class="info-title">General view</h1>
                            <p class="overview">${film.overview}</p>
                            <p class="film_genres-title">Genres</p>
                            <p class="film_genres">${film.genres.map(genre => genre.name).join(', ')}</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <section class="cast">
            <h2 class="cast_title">Main Actors</h2>
            <div class="cast_actors">
            ${cast.cast.map(actor =>{
            const urlImg = actor.profile_path ? `http://image.tmdb.org/t/p/w138_and_h175_face/${actor.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`
            return `
            <article class="actor-card">
                    <img src="${urlImg}" class="actor_img">
                    <div class="actor-card_texts">
                        <h1 class="actor_name">${actor.name}</h1>
                        <h2 class="actor_character">${actor.character}</h2>
                    </div>
                </article>`}).join('')}
            </div>
        </section>`
    return view
}

export default Film;