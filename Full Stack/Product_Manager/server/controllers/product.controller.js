const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createProduct = (request, response) => {
    const { type, price,description } = request.body;
    console.log("helloooooooooooo");
    Product.create({
        type,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}
module.exports.findAllProduct = (req, res) => {
    Product.find()
        .then(allDaProducts => res.json(allDaProducts ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.getproduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(Product => response.json(Product))
        .catch(err => response.json(err))
}
module.exports.updatedProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
 

