//Install express server
const express = require('express');
const path = require('path');

const app = express();

//serve only the static files from the dist directory

app.use(express.static('./dist/angular-todo-app'));

app.get('/*', (req, res)=>
  res.sendFile('index.html', {root: './dist/angular-todo-app'})
);

//start the app
app.listen(process.env.PORT || 8080);
