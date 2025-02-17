const {Router}=require('express');
const registerRouter = Router();
const registerController = require('../controllers/registerController');

registerRouter.get('/', registerController.getRegistration);
registerRouter.post('/', registerController.registerUser)

module.exports= registerRouter;