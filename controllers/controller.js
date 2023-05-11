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

    static showInvested(req, res){
        User.findByPk(3, {
            include: {
                model: Investment
            }
        })
        .then((users) => {
            res.send(users)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    }

    static getInvest(req, res){
        User.findByPk(3)
        .then((user) => {
            Investment.findByPk(1)
            .then((investment) => {
                user.addInvestment(investment);
            });
        });
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

    static getAddInvestment (req, res){
        Company.findAll()
        .then((companies) => {
            res.render('add-investment', { companies })
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static postAddInvestment (req, res){
        const { investmentName, CompanyId, investmentType, returnOnInvestment } = req.body
        Investment.create({ investmentName, CompanyId, investmentType, returnOnInvestment })
        .then(() => {
            res.redirect('/admins')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    }

    static getEditInvestment(req, res){
        const { InvestmentId } = req.params
        Investment.findByPk(InvestmentId)
        .then((investment) => {
            return Company.findAll()
            .then((companies) => {
                res.render('edit-investment', { InvestmentId, investment, companies })
            })
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static postEditInvestment(req, res){
        const { investmentName, CompanyId, investmentType, returnOnInvestment } = req.body
        const { InvestmentId } = req.params
        
        Investment.update({ investmentName, CompanyId, investmentType, returnOnInvestment }, { where: { id: InvestmentId } })
        .then(() => {
            res.redirect('/admins')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
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