import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { ListContextProvider } from './context/listContext/ListContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <App />
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
