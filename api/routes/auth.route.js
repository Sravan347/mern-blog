const express = require ('express')
const router = express.Router()
const {signUp}=require('../controllers/auth.controller')

router.route("/api/v1/auth").post(signUp)
module.exports=router