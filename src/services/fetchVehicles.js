import API_URL from './constants';

const fetchVehicles = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Сетевая ошибка');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка в получении данных:', error);
    throw error;
  }
};

export const vehiclesArray = await fetchVehicles();
