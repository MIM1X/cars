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

  const handleSort = (key, direction) => {
    setCars((prevCars) => {
      const sorted = [...prevCars].sort((a, b) => {
        const aValue = Number(a[key]);
        const bValue = Number(b[key]);
        if (aValue < bValue) return direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return direction === 'asc' ? 1 : -1;
        return 0;
      });
      return sorted;
    });
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Модель</th>
            <th>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Год</span>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                  }}
                >
                  <button
                    type='button'
                    onClick={() => handleSort('year', 'asc')}
                    title='Сортировать по возрастанию'
                  >
                    ▲
                  </button>
                  <button
                    type='button'
                    onClick={() => handleSort('year', 'desc')}
                    title='Сортировать по убыванию'
                  >
                    ▼
                  </button>
                </div>
              </div>
            </th>
            <th>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Цена</span>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                  }}
                >
                  <button
                    type='button'
                    onClick={() => handleSort('price', 'asc')}
                    title='Сортировать по возрастанию'
                  >
                    ▲
                  </button>
                  <button
                    type='button'
                    onClick={() => handleSort('price', 'desc')}
                    title='Сортировать по убыванию'
                  >
                    ▼
                  </button>
                </div>
              </div>
            </th>
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
