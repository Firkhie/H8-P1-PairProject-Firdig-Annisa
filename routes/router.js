const router = require("express").Router()
const Controller = require('../controllers/controller')

router.get('/', Controller.home);

router.get('/login', Controller.login);

router.get('/register', Controller.register);

router.get('/users', Controller.users);

router.get('/users/shows', Controller.showInvested);


router.get('/users/:userId/company/:CompanyId/invest', Controller.getInvest);

router.post('/users/:userId/company/:CompanyId/invest', Controller.postInvest);

router.get('/admins', Controller.admins);

router.get('/admins/add', Controller.getAddInvestment);

router.post('/admins/add', Controller.postAddInvestment);

router.get('/admins/investment/:InvestmentId/edit', Controller.getEditInvestment);

router.post('/admins/investment/:InvestmentId/edit', Controller.postEditInvestment);

router.get('/admins/investment/:InvestmentId/delete', Controller.getDeleteInvestment);

router.get('/logout', Controller.logout);

module.exports = router