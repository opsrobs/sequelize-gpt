const express = require('express');
const UserStorieController = require('./controllers/UserStorieController');

const routes = express.Router();

routes.get('/', (req, res) =>{
    return res.json({hello:'world'});
});

routes.post('/UserStorie', UserStorieController.store);

module.exports = routes;