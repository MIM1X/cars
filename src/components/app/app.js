import { useState } from 'react';
import { vehiclesArray } from '../../services/fetchVehicles';
import styled from 'styled-components';
import FormCreateCar from '../formCreateCar/formCreateCar.jsx';
import List from '../list/list.jsx';
import Map from '../map/map.jsx';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  column-gap: 20px;
`;

function App() {
  const [cars, setCars] = useState(vehiclesArray);

  return (
    <StyledApp>
      <Map cars={cars} />
      <List cars={cars} setCars={setCars} />
      <FormCreateCar cars={cars} setCars={setCars} />
    </StyledApp>
  );
}

export default App;
