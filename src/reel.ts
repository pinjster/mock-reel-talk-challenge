

export async function getMovies(){
    const res = await fetch(`https://api.themoviedb.org/3/movie/157336?api_key=${process.env.TMDB_API_KEY}`);
    if(res.ok){
        const data = await res.json();
        return {
            reels: data,
            success: true
        }
    } else {
        return {
            success: false
        }
    }
}