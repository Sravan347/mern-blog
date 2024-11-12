const express = require ('express')
const router = express.Router()
const {signUp,signIn,google}=require('../controllers/auth.controller')

router.route("/signUp").post(signUp)
router.route("/signIn").post(signIn)
router.route('/google').post(google)
module.exports=router