const z =require('zod');

const valSchema= z.object({
    name:z.string().min(2),
    description:z.string(),
    price:z.number(),
    variant:z.array(z.object({
        size:z.string().max(1).min(1),
        color:z.string(),
        material:z.string()
    }))
})

module.exports={
    valSchema
}