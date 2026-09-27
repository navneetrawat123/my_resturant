const API_URL = import.meta.env.VITE_API_URL || 'http://localhost/restaurant-website/backend/api';

async function request(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.success === false) {
    throw new Error(data.message || 'Something went wrong. Please try again.');
  }
  return data;
}

export const registerUser = (payload) =>
  request('register.php', { method: 'POST', body: JSON.stringify(payload) });

export const loginUser = (payload) =>
  request('login.php', { method: 'POST', body: JSON.stringify(payload) });

export const logoutUser = () =>
  request('logout.php', { method: 'POST' });

export const sendContactMessage = (payload) =>
  request('contact.php', { method: 'POST', body: JSON.stringify(payload) });

export const fetchMenu = () => request('menu.php', { method: 'GET' });
