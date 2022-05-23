var React = require('react');
var Default = require('./default');
const testeStyle = require('./testeStyle')
const buttonStyle = require('./buttonStyle');

function HelloMessage(props) {
    
  return <div>

        <a href="/" style={buttonStyle}>adicionar</a>
        <hr />
      
      {props.result.map(function(e){
          return(<div style={testeStyle}>
              <form action={`delete/:${e.id}`} method="post">
                  <input type="submit" value={'deletar'}/>
              </form>
              <p>Nome: {e.nome}</p>
              <p>Idade: {e.idade}</p>
              <p>Telefone: {e.telefone}</p>
              <p>Endereco: {e.endereco}</p>
              <p>RG: {e.rg}</p>
              <hr />
          </div>)
      })}
      
      
  </div>;
}

module.exports = HelloMessage;