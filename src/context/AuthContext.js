import { createContext, useContext, useState, useEffect } from 'react';

const STORAGE_KEY = 'foodie_users';
const CURRENT_USER_KEY = 'foodie_current_user';

const AuthContext = createContext(null);

function getStoredUsers() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function getStoredCurrentUser() {
  try {
    const data = localStorage.getItem(CURRENT_USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => getStoredCurrentUser());
  const [users, setUsers] = useState(() => getStoredUsers());

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    }
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  }, [currentUser]);

  const signUp = (name, email, phone, password) => {
    const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      return { success: false, error: 'An account with this email already exists.' };
    }
    const newUser = { name: name.trim(), email: email.trim().toLowerCase(), phone: phone.trim(), password };
    const userProfile = { name: newUser.name, email: newUser.email, phone: newUser.phone };
    setUsers((prev) => [...prev, newUser]);
    setCurrentUser(userProfile);
    return { success: true };
  };

  const signIn = (email, password) => {
    const user = users.find((u) => u.email.toLowerCase() === email.trim().toLowerCase());
    if (!user || user.password !== password) {
      return { success: false, error: 'Invalid email or password.' };
    }
    setCurrentUser({ name: user.name, email: user.email, phone: user.phone });
    return { success: true };
  };

  const signOut = () => {
    setCurrentUser(null);
  };

  const updateProfile = (name, email, phone) => {
    if (!currentUser) return { success: false, error: 'Not signed in.' };
    const emailChanged = email.trim().toLowerCase() !== currentUser.email;
    if (emailChanged) {
      const existing = users.find((u) => u.email.toLowerCase() === email.trim().toLowerCase());
      if (existing) {
        return { success: false, error: 'An account with this email already exists.' };
      }
    }
    const updatedProfile = { name: name.trim(), email: email.trim().toLowerCase(), phone: phone.trim() };
    setUsers((prev) =>
      prev.map((u) =>
        u.email === currentUser.email
          ? { ...u, ...updatedProfile }
          : u
      )
    );
    setCurrentUser(updatedProfile);
    return { success: true };
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        signUp,
        signIn,
        signOut,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
