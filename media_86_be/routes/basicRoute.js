const router = require('express').Router()
const basicController = require('../controllers/basicController')

router.get('/all', basicController.getAllMessage)
router.post('/create', basicController.createnewMessge)
router.put('/update', basicController.updateMessage)

module.exports = router