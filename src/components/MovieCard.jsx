import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
export const MovieCard = ({ movie }) => {
    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
    const favorite = isFavorite(movie.id)
    function onFavoriteClick(e) {
        e.preventDefault();
        console.log(favorite)
        if (favorite) {
            removeFromFavorites(movie.id)
        }
        else
            addToFavorites(movie)
    }
    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                       {favorite ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-").slice(0, 2).join("-")}</p>
            </div>
        </div>
    )
}
