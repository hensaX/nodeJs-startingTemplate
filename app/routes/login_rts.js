const express = require('express')
const router = express.Router()
const login = require('./../controllers/login_ctr')
const { AuthToken } = require('./../middlewares/AuthToken')

router.get('/auth', login.auth)
router.get('/tampils', AuthToken, login.tampils)
router.post('/tambah', login.tambah)
router.delete('/hapus', login.hapus)
router.put('/ubah', login.ubah)

module.exports = router