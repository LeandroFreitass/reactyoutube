// Importar modulo React e o hook useState
import React,{useState} from "react";

//Função
function Exemplo1_useState(){
 
  // useState e uma variavel dinamica, ele atualiza qualuqer coisa aqui

  const [texto, setTexto] = useState('Hello World');
  
  // Evento
  const evento = (e) => {
    //chamando a ação, aqui altero meu estado
    setTexto(e.target.value);
  }

  // Retorno
  return(
    <div>
      <input type='text' onChange={evento}/>
      <p>{texto}</p>
    </div>
  );
}

// Exportar
export default Exemplo1_useState;