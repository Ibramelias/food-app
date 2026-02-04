import { Link } from 'react-router-dom';
import { useBag } from '../context/BagContext';
import { useAuth } from '../context/AuthContext';
import { getItemImage } from '../data/restaurants';
import './Bag.css';

function Bag() {
  const { items, updateQuantity, removeFromBag, totalItems, totalPrice } = useBag();
  const { isAuthenticated, currentUser } = useAuth();

  if (items.length === 0) {
    return (
      <div className="bag-page">
        <header className="bag-header">
          <Link to="/" className="bag-back">← Back</Link>
          <h1 className="bag-title">Your Bag</h1>
          <Link to={isAuthenticated ? '/profile' : '/signin'} className="bag-profile-link">
            {isAuthenticated ? (currentUser?.name || 'Profile') : 'Sign in'}
          </Link>
        </header>
        <div className="bag-empty">
          <p className="bag-empty-icon">🛒</p>
          <h2>Your bag is empty</h2>
          <p>Add items from a restaurant to get started.</p>
          <Link to="/" className="bag-browse-btn">Browse restaurants</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bag-page">
      <header className="bag-header">
        <Link to="/" className="bag-back">← Back</Link>
        <h1 className="bag-title">Your Bag</h1>
        <div className="bag-header-right">
          <Link to={isAuthenticated ? '/profile' : '/signin'} className="bag-profile-link">
            {isAuthenticated ? (currentUser?.name || 'Profile') : 'Sign in'}
          </Link>
          <span className="bag-count">{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
        </div>
      </header>

      <div className="bag-content">
        <ul className="bag-list">
          {items.map((entry, index) => (
            <li key={`${entry.restaurant.id}-${entry.item.id}-${index}`} className="bag-item">
              <img
                src={getItemImage(entry.restaurant.id, entry.item.id)}
                alt={entry.item.name}
                className="bag-item-img"
              />
              <div className="bag-item-info">
                <h3 className="bag-item-name">{entry.item.name}</h3>
                <p className="bag-item-restaurant">{entry.restaurant.name}</p>
                {entry.customizations && (
                  <p className="bag-item-custom">{entry.customizations}</p>
                )}
                <div className="bag-item-row">
                  <div className="bag-qty-controls">
                    <button
                      type="button"
                      className="bag-qty-btn"
                      onClick={() => updateQuantity(index, -1)}
                      aria-label="Decrease"
                    >
                      −
                    </button>
                    <span className="bag-qty-val">{entry.quantity}</span>
                    <button
                      type="button"
                      className="bag-qty-btn"
                      onClick={() => updateQuantity(index, 1)}
                      aria-label="Increase"
                    >
                      +
                    </button>
                  </div>
                  <span className="bag-item-price">${entry.item.priceNum * entry.quantity}</span>
                </div>
                <button
                  type="button"
                  className="bag-remove"
                  onClick={() => removeFromBag(index)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="bag-footer">
          <div className="bag-total-row">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button type="button" className="bag-checkout-btn" disabled>
            Checkout (coming soon)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bag;
