
//require express
const express = require('express');
const app = express();
const port = 3000;


//require express-handlebars
const exphbs = require('express-handlebars');

//require resources
const movieList = require('./movies.json');

//set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.get('/movies', (req, res) => {

    // past the movie data into 'index' partial template
    res.render('index', { movies: movieList.results });   
})

app.listen(port, () => {
    console.log(`Your server is now listening in http://localhost:${port}`);
})

