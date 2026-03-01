import { MovieCard } from "../components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../services/api"
import "../css/Home.css"
export function Home() {
    const [searchQuery, setsearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    const loadMovies = async () => {
        try {
            const movies = await getPopularMovies();
            setMovies(movies);
        } catch (err) {
            console.log(err)
            setError("Failed to Load")
        }
        finally {
            setLoading(false);
        }

    }
    useEffect(() => {
        loadMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log("Search value:", searchQuery);
        if (!searchQuery?.trim())
            return;

        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults);
            setError(null);

        } catch (err) {
            console.log(err);
            setError("Failed to search movies...")
        }
        finally {
            setLoading(false);
        }

    }
    function searchValue(e) {
        setsearchQuery(e.target.value)
        if (e.target.value === "") {
            loadMovies();
        }
    }

    return <>
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies" className="search-input" value={searchQuery} onChange={searchValue}></input>
                <button type="submit" className="search-button">Search</button>
            </form>
            {error && (<div className="error-message">
                {error}
            </div>)}
            {loading ? (<div className="loading">
                Loading...
            </div>) :
                < div className="movies-grid">
                    {movies.map((movie) =>
                        <MovieCard movie={movie} key={movie.id}>

                        </MovieCard>)}
                </div>}
        </div >
    </>
}