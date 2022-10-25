import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
    console.log(import.meta.env);
    console.log(window)
  return (
    <div className='App'>
     <h1>{import.meta.env.VITE_APP_ENV}</h1>
      {/*{import.meta.env.mode}*/}
    </div>
  );
}

export default App;
