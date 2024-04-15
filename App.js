import logo from './logo.svg';
import './App.css';
import CustomInput from './components/CustomInput';
import { useState } from 'react';
import { isLong } from './components/functions/validators';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <CustomInput
            label="Username"
            id="CustomOne"
            value={value}
            onChange={setValue}
            validators={[isLong]}/>
      </header>
    </div>
  );
}

export default App;
