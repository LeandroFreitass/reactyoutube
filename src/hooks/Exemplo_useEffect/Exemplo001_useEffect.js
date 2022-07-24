import React, {useState, useEffect} from "react";

//função

function Exemplo001_useEffect(){

  //useState
  const [texto, setTexto] = useState('Hello World!');

  //useEffect
  useEffect(() => {
    setInterval(() => {
      setTexto('useEffect executado com sucesso')
    }, 5000);
  })

  //retorno
  return(
      <h1>{texto}</h1>
  );
}

export default Exemplo001_useEffect;