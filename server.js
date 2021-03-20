const express = require('express');
const nunjucks = require('nunjucks');
const recipes = require('./data');

const server = express();

server.set('view engine', 'njk');
server.use(express.static(__dirname + '/public'));


nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get('/', function(req, res) {
  return res.render('index', {recipes});
});

server.get('/sobre', function(req, res) {
  return res.render('about');
});

server.get('/receitas', function(req, res) {
  return res.render('recipes', {recipes});
});

server.get('/receitas/:index', function(req, res) {
  const recipeIndex = req.params.index;

  const content = recipes.find(function(content, index) {
    return index == recipeIndex;
  });

  if(!content) return res.status(404).render('not-found');

  return res.render('recipe', {content});
});

server.use(function(req, res) {
  return res.render('not-found');
});

server.listen(5000, function() {
  console.log('Server is running!');
});