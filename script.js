const apiKey = 'a752bfbf264b529a53535e2be696ea9c'; // Replace with your actual TMDB API key

// Search for movies
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const movieResults = document.getElementById('movie-results');

    if (searchButton) {
        searchButton.addEventListener('click', async () => {
            const query = searchInput.value.trim();
            if (query) {
                try {
                    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
                    const data = await response.json();
                    displayMovies(data.results);
                } catch (error) {
                    alert('Error fetching movie data. Please try again later.');
                    console.error('Error fetching search results:', error);
                }
            } else {
                alert('Please enter a movie name.');
            }
        });
    }

    // Function to display movie results
    function displayMovies(movies) {
        movieResults.innerHTML = '';
        if (movies.length === 0) {
            movieResults.innerHTML = '<p>No movies found.</p>';
        } else {
            movies.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.classList.add('movie');
                movieElement.innerHTML = `
                    <h3>${movie.title}</h3>
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                    <p>Release Date: ${movie.release_date}</p>
                    <p>Rating: ${movie.vote_average}</p>
                `;
                movieResults.appendChild(movieElement);
            });
        }
    }
});

// Fetch and display trending movies
document.addEventListener('DOMContentLoaded', () => {
    const trendingMoviesContainer = document.getElementById('trending-movies');
    
    if (trendingMoviesContainer) {
        async function getTrendingMovies() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
                const data = await response.json();
                displayTrendingMovies(data.results);
            } catch (error) {
                trendingMoviesContainer.innerHTML = '<p>Error loading trending movies. Please try again later.</p>';
                console.error('Error fetching trending movies:', error);
            }
        }

        function displayTrendingMovies(movies) {
            trendingMoviesContainer.innerHTML = '';
            if (movies.length === 0) {
                trendingMoviesContainer.innerHTML = '<p>No trending movies found.</p>';
            } else {
                movies.forEach(movie => {
                    const movieElement = document.createElement('div');
                    movieElement.classList.add('movie');
                    movieElement.innerHTML = `
                        <h3>${movie.title}</h3>
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                        <p>Release Date: ${movie.release_date}</p>
                        <p>Rating: ${movie.vote_average}</p>
                    `;
                    trendingMoviesContainer.appendChild(movieElement);
                });
            }
        }

        // Call the function when the page loads
        getTrendingMovies();
    }
});
