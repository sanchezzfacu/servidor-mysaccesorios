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
            console.log(categoryType)
    
            const newCategory = await productCreated.addCategories(categoryType)
    
            res.send('Producto creado')        

        }

        catch(error){
            res.send('Error')
        }
})

module.exports = router;