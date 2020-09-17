import {getFilms} from '../utils/getData';

const Home = async() => {

    const films = await getFilms();
    let view = `<section class="films-container">
                    <div class="films">`;

    films.results.map(film => {
        const cards = `
                    <div class="film-card">
                        <a href="#/${film.id}">
                            <img src="https://image.tmdb.org/t/p/original${film.poster_path}" class="film_img">
                            <div class="film_texts">
                                <h1 class="film_title">${film.title}</h1>
                                <h2 class="film_release-date">${film.release_date}</h2>
                            </div>
                        </a>
                    </div>                   
                `
        view += cards;
    })

    view += `</div></section>`

    return view;
}

export default Home;