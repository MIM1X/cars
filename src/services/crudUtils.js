import { vehiclesArray } from './fetchVehicles';

const createVehicle = (id, name, model, year, color, price) => {
  return { id, name, model, year, color, price };
};

const readVehicle = (id) => {
  return vehiclesArray.find((vehicle) => vehicle.id === id);
};

const updateVehicle = (id, newName, newPrice) => {
  const vehicle = readVehicle(id);
  if (vehicle) {
    vehicle.name = newName;
    vehicle.price = newPrice;
    return vehicle;
  }
  return null;
};

const deleteVehicle = (id) => {
  const index = vehiclesArray.findIndex((vehicle) => vehicle.id === id);
  if (index !== -1) {
    vehiclesArray.splice(index, 1);
    return true;
  }
  return false;
};

export { createVehicle, readVehicle, updateVehicle, deleteVehicle };
