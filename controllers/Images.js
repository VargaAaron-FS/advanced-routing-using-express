const { Image, Variant } = require('../models')

const index = async (req, res) => {
    const images = await Image.findAll({
        include: [Variant]
    })
    res.render('views/images/index', { images })
}

const form = async (req, res) => {
    const variants = await Variant.findAll()
    if (req.params.id) {
        const image = await Image.findByPk(req.params.id)
        res.render('views/images/edit', { image, variants })
    } else {
        res.render('views/images/create', { variants })
    }
}

const show = async (req, res) => {
    const image = await Image.findByPk(req.params.id)
    const variant = await image.getVariant()
    res.render('views/images/show', { image, variant })
}

const create = async (req, res, next) => {
    const image = await Image.create(req.body)
    req.imageId = image.id
    next()
    res.redirect('/images/' + image.id)
}

const update = async (req, res, next) => {
    const image = await Image.update(req.body, {
        where: { id: req.params.id }
    })
    req.imageId = req.params.id
    next()
    res.redirect('/images/' + req.params.id)
}

const remove = async (req, res) => {
    const images = await Image.destroy({ where: { id: req.params.id } })
    res.redirect('/images')
}

module.exports = { index, form, show, create, update, remove }