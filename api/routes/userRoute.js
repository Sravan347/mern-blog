const express =require('express')
const router =express.Router()
const {create}=require('../controllers/userControllers')

router.route('/api/v1/user').get(create)

module.exports =router