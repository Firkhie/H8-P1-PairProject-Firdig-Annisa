const router = require("express").Router()
const Controller = require('../controllers/controller')

router.get('/', Controller.home);

router.get('/login', Controller.login);

router.get('/register', Controller.register);

router.get('/users', Controller.users);

router.get('/users/:userId/company/:companyId/invest', Controller.getInvest);

router.post('/users/:userId/company/:companyId/invest', Controller.postInvest);

router.get('/admins', Controller.admins);

router.get('/admins/investment/:investmentId/edit', Controller.getEditInvestment);

router.post('/admins/investment/:investmentId/edit', Controller.postEditInvestment);

router.get('/admins/investment/:investmentId/delete', Controller.getDeleteInvestment);

router.get('/logout', Controller.logout);

module.exports = router