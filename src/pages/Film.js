import getHash from '../utils/getHash'
import { getDataFilm } from '../utils/getData';

const Film = async() => {

    const id = getHash().slice(1);
    const film = await getDataFilm(id);

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
    </div>`

    return view
}



export default Film;

/* 

<div class="film-view">
    <div class="film_bg-container">
        <img src="http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg" class="film_bg-img">
    </div>
    <div class="film-content">
        <div class="poster-wrapper">
            <div class="poster">
                <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/dzOxNbbz1liFzHU1IPvdgUR647b.jpg" alt="" class="poster_img">
            </div>
            <div class="poster-bottom">
            </div>
        </div>
        <div class="header-poster-wrapper">
            <section class="header-poster">
                <div class="title-content">
                    <h1 class="title">The Boys (2019)</h1>
                    <h2 class="facts">TV-MA Sci-Fi & Fantasy, Action & Adventure * 1h</h2>
                </div>
                <div class="chart-content">
                    <h1 class="score">10%</h1>
                    <h2 class="score-text">User score</h2>
                </div>
                <div class="header_info">
                    <h3 class="tagname">Nunca conozcas a tus héroes</h3>
                    <h1 class="info-title">General view</h1>
                    <p class="overview">Un enfoque irreverente de lo que pasa cuando los superhéroes, tan famosos como las celebridades, tan influyentes como los políticos y tan venerados como los dioses, abusan de sus superpoderes en vez de utilizarlos para hacer el bien. Indefensos contra superpoderosos, esta serie se embarca en una heroica misión para revelar la verdad sobre "Los Siete" y el formidable apoyo de su Vought.</p>
                    <p class="creator">Eric Kripke</p>
                    <p class="creator-description">Creator</p>
                </div>
            </section>
        </div>
    </div>
</div>
*/