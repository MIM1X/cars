import React from 'react';

function SortButtons({ onSortAsc, onSortDesc }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button
        type='button'
        onClick={onSortAsc}
        title='Сортировать по возрастанию'
      >
        ▲
      </button>
      <button
        type='button'
        onClick={onSortDesc}
        title='Сортировать по убыванию'
      >
        ▼
      </button>
    </div>
  );
}

export default SortButtons;
