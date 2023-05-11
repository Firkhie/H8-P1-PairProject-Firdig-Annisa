const { User, Investment, Company } = require("../models");

class Controller {
    static home(req, res){
        res.render('home')
    }

    static login(req, res){
        
    }

    static register(req, res){
        
    }

    static users(req, res){
        Investment.findAll()
        .then((investments) => {
            res.render('users', { investments })
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static getInvest(req, res){
        
    }

    static postInvest(req, res){
        
    }

    static admins(req, res){
        Investment.findAll()
        .then((investments) => {
            res.render('admins', { investments })
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static getEditInvestment(req, res){
        const { InvestmentId } = req.params
        Investment.findByPk(InvestmentId)
        .then((investment) => {
            // res.send(investment)
            res.render('edit-investment', { InvestmentId, investment })
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static postEditInvestment(req, res){
        
    }

    static getDeleteInvestment(req, res){
        const { InvestmentId } = req.params

        Investment.destroy({ where: { id: InvestmentId } })
        .then(() => {
            res.redirect('/admins')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    }

    static logout(req, res){
        
    }

}

module.exports = Controller;