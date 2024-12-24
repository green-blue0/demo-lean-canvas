import axios from 'axios';

function create(baseURL, options) {
  const instance = axios.create({ baseURL, timeout: 1000, ...options });
  return instance;
}

export const canvases = create(
  `${import.meta.env.VITE_API_BASE_URL}/canvases/`,
);
// export const canvases = create(
//   'https://json-server-vercel-chi-one.vercel.app/canvases/',
// );
// export const posts = create('http://localhost:8000/posts/');
