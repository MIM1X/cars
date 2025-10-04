import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: #ffffffda;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function EditModal({ car, onSave, onClose }) {
  const [name, setName] = useState(car.name);
  const [price, setPrice] = useState(car.price);

  const handleSave = () => {
    onSave(car.id, name, price);
    onClose();
  };

  return (
    <Modal>
      <h2>Редактировать автомобиль</h2>
      <label>
        <b>Название:</b>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        <b>Цена:</b>
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <div>
        <button onClick={handleSave}>Сохранить</button>
        <button onClick={onClose}>Отмена</button>
      </div>
    </Modal>
  );
}

export default EditModal;
