const express = require('express');
const app     = express();
const port    =  3000;

app.use(express.static(__dirname + 'puplic'));

app.use('/css',express.static(__dirname + 'puplic/css'));
app.use('/images',express.static(__dirname + 'puplic/images'));
app.use('/font',express.static(__dirname + 'puplic/font'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res)=> {
    res.render("index");
});


app.listen(port, ()=>console.log('listen in port'));





