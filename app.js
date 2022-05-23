const express = require('express');
const app = express();
const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234"
  });

app.set('view engine','jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/',function(req,res){
    res.render('teste',{nome:'renatinho'});
})

app.get('/teste',(req,res) =>{
    //res.send('ESTA É A PAGINA DE TESTE');
   


  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query('use renatinho;', function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });

    const sql = 'select * from usuario;'
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
