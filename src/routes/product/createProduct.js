const router = require('express').Router();
const { Product ,Categories } = require('../../db')

router.post('/', async (req,res) => {
        let {
            product,
            img,
            description,
            quantity,
            price,
            category
        } = req.body
        try {
            let productCreated = await Product.create({
                product,
                img,
                description,
                quantity,
                price,
            })
            let categoryType = await Categories.findAll({
                where : {name:category}
            })
            
            productCreated.addCategories(categoryType)
            console.log(productCreated)
    
            res.send('Producto creado')        

        }

        catch(err){
            res.send('Error')
        }
})

module.exports = router;