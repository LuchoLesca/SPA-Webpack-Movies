import {getFilms} from '../utils/getData';

const Home = async() => {

    const page = Math.floor(Math.random() * (11 - 1)) + 1;

    const films = await getFilms(page);
    const view = `<section class="films-container">
                    <div class="films">
                     ${films.results.map(film => 
                        `
                        <div class="film-card">
                            <a href="#/:${film.id}">
                                <img src="https://image.tmdb.org/t/p/original${film.poster_path}" class="film_img">
                                <div class="film_texts">
                                    <h1 class="film_title">${film.title}</h1>
                                    <h2 class="film_release-date">${film.release_date}</h2>
                                </div>
                            </a>
                        </div>
                        `).join('')}                   
                    </div>
                </section>
                `
    return view;
}

export default Home;