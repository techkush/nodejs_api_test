const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /product'
    });
});

//Post method.. this one is the useful one.
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Handling POST request to /product',
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'You discovered the Special ID',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
    
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'You discovered the Special ID',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
    
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated products!'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted products!'
    });
});

module.exports = router;