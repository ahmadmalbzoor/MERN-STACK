const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/author', AuthorController.findAllAuthor);
    app.get('/api/author/:id', AuthorController.getauthor);
    app.put('/api/author/:id', AuthorController.updatedAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);

}