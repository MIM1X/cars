import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import fetchVehicles from './services/fetchVehicles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
fetchVehicles()
  .then((data) => {
    console.log('Полученные автомобили:', data);
  })
  .catch((error) => {
    console.error('Ошибка в получении данных:', error);
  });
