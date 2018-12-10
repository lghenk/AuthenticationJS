const router = require('express').Router();
const AuthController = require('./../controllers/AuthController')

router.route('login')
    .post(AuthController.Login);

router.route('verify')
    .post(AuthController.IsAuthenticated)
    
module.exports = router;