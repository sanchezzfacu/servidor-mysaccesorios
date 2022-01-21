const router = require('express').Router();
const { Categories } = require('../../db')

const getInfo = async () => {
    return await Categories.findAll()
}

router.get('/', async (req, res) => {
    const { name } = req.query;
    let info = await getInfo()

    if(name) {
        let product = await info.filter(el => el.category.toLowerCase().includes(name.toLowerCase()))
        product.length ? 
        res.status(200).send(product) :
        res.status(404).send('Producto no encontrado')
    } else {
        res.status(200).send(info)
    }
})

module.exports = router