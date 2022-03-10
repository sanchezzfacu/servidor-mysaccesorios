const router = require('express').Router();
const { Product } = require('../../db')


router.delete('/:id', async (req, res) => {
    const { id } = req.params;
        await Product.destroy({
            where: {
                id
            }
        })
    res.status(200).send('Producto eliminado')
})

module.exports = router;