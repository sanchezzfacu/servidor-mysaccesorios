const router = require('express').Router();
const { Product, Client } = require('../../db')


const getInfo = async () => {
    return await Product.findAll()
}

router.get('/', async (req, res) => {
    const { name } = req.query;
    let info = await getInfo()

    if(name) {
        let product = await info.filter(el => el.product.toLowerCase().includes(name.toLowerCase()))
        product.length ? 
        res.status(200).send(product) :
        res.status(404).send('Producto no encontrado')
    } else {
        res.status(200).send(info)
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    let info = await getInfo()

    if(id) {
        let productId = await info.filter(el => el.id == id) 
        productId.length ? 
        res.status(200).json(productId) :
        res.status(404).send('No encontrado')
    }
})

module.exports = router;