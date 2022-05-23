var React = require('react');
var Default = require('./default');

function HelloMessage(props) {
    
  return <div>
      
      {props.result.map(function(e){
          return(<div>
              <h1>Nome: {e.nome}</h1>
              <h1>Telefone: {e.telefone}</h1>
              <hr />
          </div>)
      })}
      
      
  </div>;
}

module.exports = HelloMessage;