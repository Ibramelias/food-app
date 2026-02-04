import { useParams, Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import './RestaurantDetail.css';

function RestaurantDetail() {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <div className="restaurant-detail">
        <div className="not-found">
          <h2>Restaurant not found</h2>
          <Link to="/" className="back-link">← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="restaurant-detail">
      <header className="detail-header">
        <Link to="/" className="back-button" aria-label="Back to restaurants">
          ← Back
        </Link>
        <div className="detail-icon">{restaurant.image}</div>
        <h1 className="detail-name">{restaurant.name}</h1>
        <p className="detail-cuisine">{restaurant.cuisine}</p>
      </header>

      <section className="menu-section">
        <h2 className="menu-title">Menu</h2>
        <ul className="menu-list">
          {restaurant.menu.map((item) => (
            <li key={item.id} className="menu-item">
              <div className="menu-item-info">
                <h3 className="menu-item-name">{item.name}</h3>
                <p className="menu-item-description">{item.description}</p>
              </div>
              <span className="menu-item-price">{item.price}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default RestaurantDetail;
