const router = require('express').Router();
const { Categories } = require('../../db')

router.post('/', async (req,res) => {
    try {
        let {
            name,
        } = req.body
        let total = req.body

        let categoryCreated = await Categories.create({
            name,
        })
        res.status(200).send('Categoria creada satisfactoriamente')
    }

    catch {
        res.status(400).send('Error')
    }
})

module.exports = router;