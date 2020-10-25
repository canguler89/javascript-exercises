const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=df78267c866549c5b3e73cdfecb3bffc";

const IMGPATH = 'https://image.tmdb.org/t/p/w1280'

const main = document.querySelector("main");
const form = document.querySelector("form");
const search = document.querySelector("search");





async function getMovies() {
    const res = await fetch(APIURL);
    const resData = await res.json();
    console.log(resData)

   resData.results.map(movie => {
       const { poster_path, title, vote_average } = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${IMGPATH + poster_path}" alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
        `
        main.appendChild(movieEl)
    })
       
    return resData
}

function getClassByRate(vote){
    if(vote >= 8){
        return "green";
    }else if(vote >=5){
        return 'orange'
    }else{
        return 'red';
    }
}

getMovies()

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const searchTerm = search.value;
    
})