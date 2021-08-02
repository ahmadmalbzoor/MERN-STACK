const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/show', ProductController.findAllProduct);
    app.get('/api/product/:id', ProductController.getproduct);
    app.put('/api/product/:id', ProductController.updatedProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);

}