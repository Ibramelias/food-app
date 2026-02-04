import { useParams, Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import { useBag } from '../context/BagContext';
import './RestaurantDetail.css';

function RestaurantDetail() {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);
  const { totalItems } = useBag();

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
        <div className="detail-header-top">
          <Link to="/" className="back-button" aria-label="Back to restaurants">
            ← Back
          </Link>
          <Link to="/bag" className="bag-link" aria-label="View bag">
            🛒 {totalItems > 0 && <span className="bag-badge">{totalItems}</span>}
          </Link>
        </div>
        <div className="detail-icon">{restaurant.image}</div>
        <h1 className="detail-name">{restaurant.name}</h1>
        <p className="detail-cuisine">{restaurant.cuisine}</p>
      </header>

      <section className="menu-section">
        <h2 className="menu-title">Menu</h2>
        <ul className="menu-list">
          {restaurant.menu.map((item) => (
            <Link
              key={item.id}
              to={`/restaurant/${restaurant.id}/item/${item.id}`}
              className="menu-item-link"
            >
              <li className="menu-item">
                <div className="menu-item-info">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <p className="menu-item-description">{item.description}</p>
                </div>
                <span className="menu-item-price">{item.price}</span>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default RestaurantDetail;
