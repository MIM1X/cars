import React, { useState } from 'react';
import EditModal from '../editModal/editModal';
import { updateVehicle } from '../../services/crudUtils';

function List({ cars, setCars }) {
  const [editingCar, setEditingCar] = useState(null);

  const handleDelete = (id) => {
    setCars((prev) => prev.filter((car) => car.id !== id));
  };

  const handleSave = (id, name, price) => {
    updateVehicle(id, name, price);
    setCars((prev) =>
      prev.map((car) => (car.id === id ? { ...car, name, price } : car))
    );
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Модель</th>
            <th>Год</th>
            <th>Цена</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.name}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.price}</td>
              <td>
                <button onClick={() => setEditingCar(car)}>
                  Редактировать
                </button>
                <button onClick={() => handleDelete(car.id)}>Удалить</button>
              </td>
            </tr>
          ))}
          {cars.length === 0 && (
            <tr>
              <td colSpan={5}>Пусто</td>
            </tr>
          )}
        </tbody>
      </table>

      {editingCar && (
        <EditModal
          car={editingCar}
          onSave={handleSave}
          onClose={() => setEditingCar(null)}
        />
      )}
    </>
  );
}

export default List;
