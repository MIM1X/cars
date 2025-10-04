import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

function Map({ cars = [] }) {
  const spbCoords = [59.9386, 30.3141];

  const carsWithCoords = cars.filter(
    (car) => car.latitude !== undefined && car.longitude !== undefined
  );

  return (
    <MapContainer
      center={spbCoords}
      zoom={9}
      style={{
        height: '450px',
        width: '450px',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {carsWithCoords.map((car) => (
        <Marker key={car.id} position={[car.latitude, car.longitude]}>
          <Popup>
            <strong>{car.name}</strong> <br />
            Модель: {car.model} <br />
            Год: {car.year} <br />
            Цена: {car.price} ₽
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
