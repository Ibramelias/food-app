import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { restaurants, getItemImage } from '../data/restaurants';
import { useBag } from '../context/BagContext';
import { useAuth } from '../context/AuthContext';
import './ItemDetail.css';

function ItemDetail() {
  const { restId, itemId } = useParams();
  const navigate = useNavigate();
  const { addToBag, totalItems } = useBag();
  const { isAuthenticated } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [customizations, setCustomizations] = useState('');
  const [showCustomize, setShowCustomize] = useState(false);

  const restaurant = restaurants.find((r) => r.id === restId);
  const item = restaurant?.menu?.find((m) => m.id === parseInt(itemId, 10));

  if (!restaurant || !item) {
    return (
      <div className="item-detail">
        <div className="item-not-found">
          <h2>Item not found</h2>
          <Link to="/">Back to home</Link>
        </div>
      </div>
    );
  }

  const handleAddToBag = () => {
    if (!isAuthenticated) {
      navigate('/signin');
      return;
    }
    addToBag(item, restaurant, quantity, customizations);
    navigate('/bag');
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="item-detail">
      <div className="item-detail-top">
        <Link to="/bag" className="item-bag-link" aria-label="View bag">
          🛒 {totalItems > 0 && <span className="item-bag-badge">{totalItems}</span>}
        </Link>
        <button
          className="item-close-btn"
          onClick={handleClose}
          aria-label="Close"
          type="button"
        >
          ✕
        </button>
      </div>

      <div className="item-image-wrap">
        <img
          src={getItemImage(restId, itemId)}
          alt={item.name}
          className="item-image"
        />
      </div>

      <div className="item-content">
        <h1 className="item-name">{item.name}</h1>
        <p className="item-description">{item.description}</p>

        <div className="item-meta">
          <span className="item-price">{item.price}</span>
          <span className="item-calories">{item.calories} cal</span>
        </div>

        <div className="quantity-section">
          <label className="quantity-label">Quantity</label>
          <div className="quantity-controls">
            <button
              type="button"
              className="qty-btn"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="qty-value">{quantity}</span>
            <button
              type="button"
              className="qty-btn"
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        <div className="customize-section">
          <button
            type="button"
            className="customize-btn"
            onClick={() => setShowCustomize(!showCustomize)}
          >
            Customize {showCustomize ? '▲' : '▼'}
          </button>
          {showCustomize && (
            <textarea
              className="customize-input"
              placeholder="Add special requests (e.g. no onions, extra sauce)"
              value={customizations}
              onChange={(e) => setCustomizations(e.target.value)}
              rows={3}
            />
          )}
        </div>

        <button
          type="button"
          className="add-to-bag-btn"
          onClick={handleAddToBag}
        >
          {isAuthenticated ? 'Add to bag' : 'Sign in to add to bag'}
        </button>
      </div>
    </div>
  );
}

export default ItemDetail;
