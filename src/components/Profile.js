import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Profile.css';

function Profile() {
  const { currentUser, isAuthenticated, signOut, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin');
      return;
    }
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setPhone(currentUser.phone || '');
    }
  }, [currentUser, isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    const result = updateProfile(name, email, phone);
    if (result.success) {
      setMessage('Profile updated successfully.');
    } else {
      setError(result.error);
    }
  };

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="profile-page">
      <header className="profile-header">
        <Link to="/" className="profile-back">← Back</Link>
        <h1 className="profile-title">Your profile</h1>
        <p className="profile-subtitle">Manage your account details</p>
      </header>

      <div className="profile-content">
        <form className="profile-form" onSubmit={handleSubmit}>
          {message && <p className="profile-message">{message}</p>}
          {error && <p className="profile-error">{error}</p>}
          <label className="profile-label">
            Name
            <input
              type="text"
              className="profile-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </label>
          <label className="profile-label">
            Email
            <input
              type="email"
              className="profile-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="profile-label">
            Phone number
            <input
              type="tel"
              className="profile-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
            />
          </label>
          <button type="submit" className="profile-save">Save changes</button>
        </form>

        <button type="button" className="profile-signout" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </div>
  );
}

export default Profile;
