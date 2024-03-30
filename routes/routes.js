const express=require('express');
const router=express.Router();
const productController= require('../Controllers/ProductsController');



router.get('/',productController.getAllProducts);
router.post('/addProduct',productController.addProduct);
router.get('/search',productController.searchProduct);
router.put('/update/:id',productController.updateProduct);
router.delete('/deleteProduct',productController.deleteProduct);
router.delete('/deleteVariant/:id',productController.deleteVariant);
module.exports=router;