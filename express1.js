const path = require('path')
const express = require('express')
const logger = require('morgan')


//app is similar to server.js, app has a set of features provided by Express framework
const app = express()
//log the request that is processes
app.use(logger('dev'));
//Serve static files, midlleware pour gérer les fichiers statics(HTML,CSS,JS,Img) dans un sous dossier publiques
app.use(express.static(path.join(__dirname, 'public')));

/*make sure to put the the other middleware here between static et generic*/

app.get('/athlete/:id', (req, res) => {
  res.send(`les détails de l'athlète ${req.params.id} devrait aller ici`)
})

app.get('/athletes', (req, res) => {
  res.send(`une liste d'athèle devrait venir là`)
})

app.post('/search', (req, res) => {
  res.send('Votre recherche pour' + req.body.searchText + 'a renvoyé X résultats')
});

//Route for everything else, middleware pour les autres cas - non statiques
app.get('*', (req, res) => {
  res.send('Hello World');
})
//Fire it up
app.listen(3000);
console.log('Listening on port 3000');