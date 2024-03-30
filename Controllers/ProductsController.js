const mongoose=require('mongoose');
const Product=require('../Schema/productSchema');
const {valSchema}=require('../Schema/validationSchema');
const z= require('zod');


async function addProduct(req,res,next){
    const response=valSchema.safeParse(req.body);
    if(!response.success){
        res.json({
            msg:"Something wrong with inputs"
        })
    }
    const name=req.body.name;
    const variant=req.body.variant;
    let exist=false;
    const product=await Product.find({name:name});
    if(product){
        product.forEach(prod=>{
            if(prod.variant[0].size==variant[0].size && prod.variant[0].color==variant[0].color && prod.variant[0].material==variant[0].material){
                exist=true;
            }
        })
    }

    if(exist){
        res.json({
            msg:"Product Already Exist"
        })
    }else{
        const product= new Product(req.body);
        product.save();
        res.json({
            msg:"Product Added !",
        })
    }
}

async function searchProduct(req,res,next){
    const name=req.body.name;
    const variant=req.body.variant;
    const response=await Product.find({name});
    if(!response){
        res.json({
            msg:"Product not found"
        })
    }
    if(variant){
        // response.forEach((result)=>{
        //     if(result.variant[0].size==variant[0].size || result.variant[0].color==variant[0].color || result.variant[0].material==variant[0].material){
        //         res.json({
        //             name:name,
        //             variant:result.variant[0],
        //         })
        //     }else{
        //         res.json({
        //             msg:"Product does not exist"
        //         })
        //     }
        // })
    }
    else{
        
        let variants=[];
        response.forEach(res=>{
            variants.push(res.variant[0]);
        })
        res.json({
            name:req.body.name,
            variants:variants,
        })
    }
    
    
}
async function updateProduct(req,res,next){
    const updateVal=req.body;
    try{
        await Product.findByIdAndUpdate(req.params.id,updateVal).exec();
        res.json({
            msg:"Product updated"
        })

    }catch(e){
        res.json({
            msg:"Something went wrong",
        })
    }

}



module.exports={addProduct,searchProduct,updateProduct}