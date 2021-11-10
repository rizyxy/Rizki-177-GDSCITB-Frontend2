import { useState } from 'react';
import './App.css';
import './components/Wishlist.css';
import './components/Navbar.css';
import './components/Overview.css';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [overview, setOverview] = useState([]);
  const [page, setPage] = useState('movies')

  const [movies] = useState (
    [
      {
        name: 'Avengers : Endgame',
        genre: 'Action, Superheroes',
        image: 'https://th.bing.com/th/id/OIP.tHrbXqmmuG4c824hNDdsHwHaLH?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        overview: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
      },
      {
        name: 'Avengers : Infinity War',
        genre: 'Action, Superheroes',
        image: 'https://th.bing.com/th/id/OIP.ZkOmuqOWNqKDYkMKe2YeAgHaK-?w=203&h=301&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        overview: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.'
      },
      {
        name: 'Avengers : Age of Ultron',
        genre: 'Action, Superheroes',
        image: 'https://upload.wikimedia.org/wikipedia/id/1/1b/Avengers_Age_of_Ultron.jpg',
        overview: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan."
      },
      {
        name: 'Avengers',
        genre: 'Action, Superheroes',
        image: 'https://upload.wikimedia.org/wikipedia/id/f/f9/TheAvengers2012Poster.jpg',
        overview: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
      },
    ]);

    const addToWishlist = (movie) => {
      setWishlist([...wishlist, {...movie}]);
    };

    const removeFromWL = (movieToRemove) => {
      setWishlist(
        wishlist.filter((movie) => movie !== movieToRemove)
      );
    };

    const toOverviewHandler = (movie) => {
      setOverview([...overview, {...movie}]);
      setPage('overview');
    };

    const fromOverviewHandler = (overviewToRemove) => {
      setOverview(
        overview.filter((movie) => movie !== overviewToRemove)
        );
      navigateTo('movies');
    };

    const navigateTo = (nextPage) => {
      setPage(nextPage);
    };

    const renderMovies = () => (
      <>
              <div className = "Navbar">
                  <ul>
                      <li>
                        <h4>NETFLIX</h4>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('movies')} className = "ActivedHome">Home</a>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('wishlist')} className="WLButton">Wishlist ({wishlist.length})</a>
                      </li>
                  </ul>
              </div>
              <div className="Cards">
              {movies.map((movie, idx) => (
                <div className = "Card" key={idx}>
                  <img onClick={() => toOverviewHandler(movie)} className="MoviePoster" src = {movie.image}></img>
                  <div className = "Container">
                    <h5>{movie.name}</h5>
                    <h5>{movie.genre}</h5>
                    <div onClick={() => addToWishlist(movie)} className="Button">
                    <p>Add to Wishlist</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </>
    );

    const renderOverview = () => (
      <>
      <div className = "Navbar">
        <ul>
            <li>
                <h4>NETFLIX</h4>
            </li>
        </ul>
      </div>
      <div className = "OverviewHeader" >
          <h5>Overview</h5>
          </div>
      <div className="OverviewContent">
          <div className = "Overview">
            {overview.map((movie, idx) => (
            <div className = "OverviewContainer">
              <img className = "OverviewPoster" src = {movie.image}></img>
              <div className = "MovieOverview">
                <p>{movie.overview}</p>
              </div>
              <h5 className="BackButton" onClick={() => fromOverviewHandler(movie)}>Back</h5>
            </div>
          ))}
          </div>
      </div>
      
      </>
    )

    const renderWishlist = () => (
      <>
      <div className = "Navbar">
                  <ul>
                      <li>
                        <h4>NETFLIX</h4>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('movies')} className = "Home">Home</a>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('wishlist')} className="ActivedWL">Wishlist ({wishlist.length})</a>
                      </li>
                  </ul>
      </div>
      <div className = "Wishlist">
        <div className = 'WishlistContent'>
          <div className = "WishlistHeader">
            <h5>Wishlist</h5>
          </div>
          <div className = "WishlistBody">
            <div className = "WishlistCards">
              {wishlist.map((movie, idx) => (
                <div className = "WishlistCard">
                  <div className = "Details">
                    <img src = {movie.image}></img>
                    <h5>{movie.name}</h5>
                  </div>
                  <div className = "RemoveButton">
                    <h5 onClick={() => removeFromWL(movie)}>Remove</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </>
    );

  return (
    <div className="App">
            {page === 'movies' && renderMovies()}
            {page === 'overview' && renderOverview()} 
            {page === 'wishlist' && renderWishlist()}
    </div>
  );
}
export default App;
