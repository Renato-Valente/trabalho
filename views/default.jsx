var React = require('react');

function DefaultLayout(props) {
  return (
        <div>

          <form action="salvar" method='POST'>

          <label>Nome:</label>
          <input type="text" name='nome' id='nome'/>
          <br />

          <label>Idade:</label>
          <input type="text" name='idade' id='idade'/>
          <br />

          <label>Telefone:</label>
          <input type="text" name='telefone' id='telefone'/>
          <br />

          <label>Endereco:</label>
          <input type="text" name='endereco' id='endereco'/>
          <br />

          <label>RG:</label>
          <input type="text" name='rg' id='rg'/>
          <br />

          <input type="submit" value="Enviar" />

          </form>

          
        </div>
  );
}

module.exports = DefaultLayout;