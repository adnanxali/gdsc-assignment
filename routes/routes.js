const express=require('express');
const router=express.Router();
const productController= require('../Controllers/ProductsController');



router.get('/',(req,res,next)=>{
    res.send("display all products");
})
router.post('/addProduct',productController.addProduct);
router.get('/search',productController.searchProduct);
router.put('/update/:id',productController.updateProduct);
router.delete('/delete',(req,res,next)=>{
    res.send("delete product");
})
module.exports=router;