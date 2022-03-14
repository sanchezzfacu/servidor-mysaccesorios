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

        const newCategory = await productCreated.addCategories(categoryType)

        productCreated.addCategories(categoryType)
        res.send('Producto creado')        
})

module.exports = router;