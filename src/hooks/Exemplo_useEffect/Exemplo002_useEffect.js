import React, {useState, useEffect} from "react";

//função

function Exemplo002_useEffect(){

  //useState
  const [vetor, setVetor] = useState([]);
  const [status, setStatus] = useState('Carregando...');

  // useEffect
  useEffect(() => {
    obterDados();
  });

  //Função para obter os dados da API
  const obterDados = async () => {

    const dados = await fetch('https://api.github.com/users/leandrofreitass/repos');
    const converter = await dados.json();
    setVetor(converter);
    setStatus('Dados carregados com sucesso!')
  }


  //retorno
  return(
     <div>
      <h1>{status}</h1>
      <ul>
        {vetor.map(objeto => (<li>{objeto.full_name}</li>))}
      </ul>
     </div>
  )
}

export default Exemplo002_useEffect;