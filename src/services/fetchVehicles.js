const url = 'https://ofc-test-01.tspb.su/test-task/vehicles';

const fetchVehicles = async () => {
  try {
    const response = await fetch(url);
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

export default fetchVehicles;
