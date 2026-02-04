import { Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import { useBag } from '../context/BagContext';
import './HomePage.css';

function HomePage() {
  const { totalItems } = useBag();

  return (
    <div className="home-page">
      <header className="home-header">
        <Link to="/bag" className="home-bag-link" aria-label="View bag">
          🛒 {totalItems > 0 && <span className="home-bag-badge">{totalItems}</span>}
        </Link>
        <h1 className="app-name">Foodie</h1>
        <p className="app-tagline">Discover restaurants near you</p>
      </header>

      <section className="restaurants-section">
        <h2 className="section-title">Restaurants</h2>
        <div className="restaurant-grid">
          {restaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={`/restaurant/${restaurant.id}`}
              className="restaurant-card"
            >
              <div className="card-icon">{restaurant.image}</div>
              <h3 className="card-name">{restaurant.name}</h3>
              <p className="card-cuisine">{restaurant.cuisine}</p>
              <p className="card-description">{restaurant.description}</p>
              <span className="card-cta">View menu →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
