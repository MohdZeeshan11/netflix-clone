
// api-key
// 410058bf65914435690e8d7703c402d1
const api_key = '410058bf65914435690e8d7703c402d1';

const requests = {
    fetchNetflixOriginals:`/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchTrending:`/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentariesMovies:`/discover/movie?api_key=${api_key}&with_genres=99`
}

export default requests;