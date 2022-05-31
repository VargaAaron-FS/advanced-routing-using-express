const express = require('express')
const router = express.Router()
const imageCtrl = require('../controllers/Images')
const { uploadImage } = require('../middlewares')

router.get('/', imageCtrl.index)
router.get('/new', imageCtrl.form)
router.get('/:id', imageCtrl.show)
router.get('/:id/edit', imageCtrl.form)
router.post('/', imageCtrl.create, uploadImage)
router.post('/:id', imageCtrl.update, uploadImage)
router.delete('/:id', imageCtrl.remove)
router.get('/:id/delete', imageCtrl.remove)

module.exports = router