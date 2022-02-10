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

        if(categoryType.length === 0) {
            const newCategory = await Categories.create({
                name: category
            })
            await productCreated.addCategories(newCategory)
        } else {
            await productCreated.addCategories(categoryType)
        }

        productCreated.addCategories(categoryType)
        res.status(200).send('Producto creado')
        
        res.status(400).send('Error')
})

module.exports = router;