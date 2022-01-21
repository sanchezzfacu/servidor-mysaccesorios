const router = require('express').Router();
const { Categories, Product } = require('../../db')

router.post('/', async (req,res) => {
    try {
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
            // category
        })
        
        let categoryType = await Categories.findAll({
            where : {name:category}
        })
        productCreated.addCategory(categoryType)
        res.status(200).send('Producto creado')
    } 

    catch {
        res.status(400).send('Error')
    }

})

module.exports = router;