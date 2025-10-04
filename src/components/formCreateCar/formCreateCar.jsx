import React from 'react';
import styled from 'styled-components';
import { createVehicle } from '../../services/crudUtils';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

function FormCreateCar({ cars, setCars }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = createVehicle(
      cars.length > 0 ? cars[cars.length - 1].id + 1 : 1,
      e.target.name.value,
      e.target.model.value,
      e.target.year.value,
      e.target.color.value,
      e.target.price.value
    );

    setCars((prev) => [...prev, newCar]);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Добавить новый автомобиль</h2>
      <input type='text' name='name' placeholder='Название' />
      <input type='text' name='model' placeholder='Модель' />
      <input type='text' name='year' placeholder='Год' />
      <div>
        <label htmlFor='color'>Цвет</label>
        <input type='color' id='color' name='color' />
      </div>
      <input type='text' name='price' placeholder='Цена' />
      <button type='submit'>Добавить</button>
    </StyledForm>
  );
}

export default FormCreateCar;
