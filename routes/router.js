const router = require("express").Router()
const Controller = require('../controllers/controller')

router.get('/', Controller.home);

router.get('/login', Controller.getLogin);

router.post('/login', Controller.postLogin);

router.get('/register', Controller.getRegister);


router.post('/register', Controller.postRegister);

router.get('/logout', Controller.logout);

router.get('/users/shows', Controller.showInvested);


router.get('/users/:userId/company/:CompanyId/invest', Controller.getInvest);

router.post('/users/:userId/company/:CompanyId/invest', Controller.postInvest);


router.use(function(req, res, next) {
    if(!req.session.userId) {
        const error = 'Please log in first!'
        res.redirect(`login?error=${error}`)
    } else {
        next()
    }
})


const member = function logMethod (req, res, next) {
    if(req.session.userRole !== 'member') {
        res.redirect("/admins");
    } else {
        next()
    }
  }

const admin = function logMethod (req, res, next) {
    if(req.session.userRole !== 'administrator') {
        res.redirect("/users");
    } else {
        next()
    }
  }

router.get('/users', member, Controller.users);

router.get('/admins/add', Controller.getAddInvestment);

router.post('/admins/add', Controller.postAddInvestment);

router.get('/admins/investment/:InvestmentId/edit', Controller.getEditInvestment);

router.post('/admins/investment/:InvestmentId/edit', Controller.postEditInvestment);

router.get('/admins/investment/:InvestmentId/delete', Controller.getDeleteInvestment);

router.get('/users/investments/:InvestmentId/invest', member, Controller.getInvest);

router.post('/users/investments/:InvestmentId/invest', member, Controller.postInvest);

router.get('/admins', admin, Controller.admins);

router.get('/admins/investment/:investmentId/edit', admin, Controller.getEditInvestment);

router.post('/admins/investment/:investmentId/edit', admin, Controller.postEditInvestment);

router.get('/admins/investment/:investmentId/delete', admin, Controller.getDeleteInvestment);

router.get('/investmentschart', member, Controller.investmentsChart);

module.exports = router