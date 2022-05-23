const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query('use renatinho;', function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });

app.set('view engine','jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function(req,res){
    res.render('default');
})

app.post('/salvar',function(req,res){
  const body = req.body;
  //res.send(body);
  const sql = `insert into cliente (nome,idade,telefone,endereco,rg) values ('${body.nome}',${body.idade},'${body.telefone}','${body.endereco}','${body.rg}');`;
  //const abc = `insert into cliente (nome,idade,telefone,endereco,rg) values ('bastilla',23,'3434','Dantooine','5443');`;
  con.query(sql,function(err,result){
    if(err) throw err;
    res.redirect('/teste');
  })
})

app.post('/delete/:id',function(req,res){
  const num = req.params.id.replace(':','');
  const id = parseInt(num);
  const sql = `delete from cliente where id = ${id}`;

  con.query(sql,function(err,result){
    if(err) throw err;
    res.redirect('/teste');
  })

})

app.get('/teste',(req,res) =>{
    //res.send('ESTA É A PAGINA DE TESTE');
   
    const sql = 'select * from cliente;'
    con.query(sql,function(err,result){
        if(err) throw err;
        //console.log('Result: ' + JSON.stringify(result,null,2));
        res.render('teste',{result:result})
    })
  });

})

app.listen(3000,function(){
    console.log('express server running');
});
