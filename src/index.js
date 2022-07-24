import React from 'react';
import ReactDOM from 'react-dom/client';

//useState
import Exemplo01 from './hooks/Exemplo_useState/Exemplo1_useState'
import Exemplo02 from './hooks/Exemplo_useState/Exemplo2_useState'
import Exemplo03 from './hooks/Exemplo_useState/Exemplo3_useState'
import Exemplo04 from './hooks/Exemplo_useState/Exemplo4_useState'

//useEffect
import Exemplo001 from './hooks/Exemplo_useEffect/Exemplo001_useEffect'
import Exemplo002 from './hooks/Exemplo_useEffect/Exemplo002_useEffect'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Exemplo002 />
  </React.StrictMode>
);


