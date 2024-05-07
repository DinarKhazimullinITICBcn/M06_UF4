// Claus
const keys = {
    api_key: 'bcf05c2d2aae8da10365659ce5558693',
    session_id: '350b2c23148e9d092e8403d8c180c52f6f06469e',
    account_id: '21228234'
}
// Variables per al scroll infinit
var total_pages = 0;
var current_page = 1;
var query = '';

let moviesResult = document.getElementById("moviesResult");

//Funcio per afegir pelicules favorites. Una funcio async que agafa la url per afegir a favorits una pelicula
//Amb certa pelicula, agafada de la pelicula pasada.
async function setFav(id, favBool) {
    const url = `https://api.themoviedb.org/3/account/${keys.account_id}/favorite?api_key=${keys.api_key}&session_id=${keys.session_id}`;
    const body = {
        "media_type": "movie",
        "media_id": id,
        "favorite": favBool
    };
    //Despres, fa im fetcj amb la url pasant-li un json amb la configuracio pasada a json.
    //En cas de funcionar correctament, fara el que estas fent, i fara un console log de si
    //la pelicula amb id ha sigut marcada com a true or false. Si dona error, el mostra
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        console.log(`id ${id} marked as ${favBool}`);
        showFavs(); 
    } catch (error) {
        console.log('Error fetch: ', error.message);
    }
}
//Funcio per mostrar pelicules favorites, Fa un fetch amb la meva informacio i si no dona erros,
//converteix el json del response en un data, i fa un for each i els "printea" al html.
async function showFavs() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/account/${keys.account_id}/favorite/movies?api_key=${keys.api_key}&session_id=${keys.session_id}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        data.results.forEach(movie => printMovie(movie, true, false));
    } catch (error) {
        console.log('Error fetch: ', error.message);
    }
}
// 
// 
async function searchMovies(q) {
    clearInput();
    removeActive();
    query = q;

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${keys.api_key}&query=${query}&page=${current_page}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        total_pages = data.total_pages; 
        for (let movie of data.results) {
            const favResponse = await fetch(`https://api.themoviedb.org/3/account/${keys.account_id}/favorite/movies?api_key=${keys.api_key}&session_id=${keys.session_id}`);
            if (!favResponse.ok) {
                throw new Error(`Error Fav: ${favResponse.status}`);
            }
            const favData = await favResponse.json();
            const isFav = favData.results.some(favMovie => favMovie.id === movie.id);
            printMovie(movie, isFav, false);
        }
    } catch (error) {
        console.log('Error fetch: ', error.message);
    }
}

window.addEventListener('scroll', async () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && current_page < total_pages) {
        current_page++; 
        showLoading();
        await searchMovies(query); 
        hideLoading();
    }
});

function showLoading() {
    document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}


/* FUNCIONS D'INTERACCIÓ AMB EL DOM */

// Click Favorites
document.getElementById("showFavs").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    showFavs();
})

// Click Watchlist
document.getElementById("showWatch").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    //showWatch();
})

/* Funcions per detectar la cerca d'una pel·lícula */
// Intro a l'input
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchMovies(this.value);
    }
});

// Click a la lupa
document.querySelector(".searchBar i").addEventListener("click", ()=>searchMovies(document.getElementById("search").value));

// Netejar l'input
document.getElementById("search").addEventListener('click', ()=>clearInput()); 

function clearInput(){
    document.getElementById("search").value="";
}

// Elimina l'atribut active del menú
function removeActive(){
    document.querySelectorAll(".menu li a").forEach(el=>el.classList.remove("active"));
}

/* Funció per printar les pel·lícules */
function printMovie(movie, fav, watch){

    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.original_title}</h3>
                                    <div class="buttons">
                                        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                    </div>`;
}
