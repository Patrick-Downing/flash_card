const {Router} = require('express');
const indexRouter = Router();
const indexContorller = require('../controllers/indexController')

indexRouter.get('/', indexContorller.getIndex)


module.exports = indexRouter;