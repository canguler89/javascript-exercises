const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=df78267c866549c5b3e73cdfecb3bffc";

const IMGPATH = 'https://image.tmdb.org/t/p/w1280'
async function getMovies() {
    const res = await fetch(APIURL);
    const resData = await res.json();
    
    console.log(resData)

    resData.results.forEach(movie => {
        let img = document.createElement("img");
        img.src = IMGPATH + movie.poster_path;
        document.body.appendChild(img)
    })


    return resData
}
getMovies()