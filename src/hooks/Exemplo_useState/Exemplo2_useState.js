// Importar modulo React e o hook useState
import React,{useState} from "react";

//Função
function Exemplo2_useState(){

  //useState
 const [nome, setNome] = useState('');
 const [idade, setIdade] = useState(0);


 return(
  <div>
    <input type='text' placeholder='Nome' onChange={e => setNome(e.target.value)} />
    <input type='number' placeholder='Idade' onChange={e => setIdade(e.target.value)}/>

    <p>{nome}</p>
    <p>{idade}</p>
  </div>
 )

}

// Exportar
export default Exemplo2_useState;