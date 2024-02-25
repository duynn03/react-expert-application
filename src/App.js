import { useState } from 'react';
import LocalStorageContext from './context/LocalStorageContext';
import Exercise1 from './containers/Exercise1';
import Exercise2 from './containers/Exercise2';
import Exercise3 from './containers/Exercise3';

const App = () => {

  const [localStorage, setLocalStorage] = useState(new Map());

  return (
    <LocalStorageContext.Provider value={{ localStorage, setLocalStorage }}>
      <Exercise1 />
      <hr />
      <Exercise2 />
      <hr />
      <Exercise3 />
    </LocalStorageContext.Provider>
  );
}

export default App;
