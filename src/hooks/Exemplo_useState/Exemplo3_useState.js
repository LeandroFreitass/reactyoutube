// Importar modulo React e o hook useState
import React,{useState} from "react";

//Função
function Exemplo3_useState(){

  //useState
 const [nota1, setNota1] = useState(0);
 const [nota2, setNota2] = useState(0);
 const [nome, setNome] = useState('');

 //Media
 let media = (nota1 + nota2) / 2;

 //situação
 let situacao = media >= 7 ? 'Aprovado(a)' : 'Reprovado(a)'


 return(
  <div>
    <input type='text' placeholder='Coloque seu nome' onChange={e => setNome(e.target.value)}/>
    {/* Convertando uma string para um numero */}
    <input type='number' placeholder='Primeira nota' onChange={e => setNota1(parseFloat(e.target.value))}/> 
     {/* Convertando uma string para um numero */}
    <input type='number' placeholder='Segunda nota' onChange={e => setNota2(parseFloat(e.target.value))}/>
     
     {nome && nota1 && nota2  ? <h1>{nome} sua situação é {situacao} e sua média é {media}</h1> : <h1>Aguardando nota</h1> }

  </div>
 )

}

// Exportar
export default Exemplo3_useState;