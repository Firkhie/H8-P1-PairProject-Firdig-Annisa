const { User, Investment, Company, MemberDetail } = require("../models");
const { Op } = require('sequelize')
const bcrypt = require('bcryptjs');

class Controller {
    static home(req, res){
        res.render('home')
    }

    static getRegister(req, res){
        res.render('register')
    }

    static postRegister(req, res){
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            role: req.body.role,
            password: req.body.password,
        }

        User.create(newUser)
        .then ((user) => {
            const newUserDetail = {
                name: req.body.name,
                gender: req.body.gender,
                phoneNumber: req.body.phoneNumber,
                UserId: user.id
            }

            return MemberDetail.create(newUserDetail)
        })
        .then(() => {
            res.redirect('/login')
        })
        .catch((err) => {
            let errors = []
            if (err.name == 'SequelizeValidationError') {
                err.errors.map(el => {
                errors.push(el.message)
                })
            }
            // res.render('register', { errors })
            res.send(errors)
        })
    }

    static getLogin(req, res){
        const { error } = req.query
        res.render('login', { error })
    }

    static postLogin(req, res){
        
        const { username, password } = req.body

        User.findOne({ where: {username: username} })
        .then((user) => {
            if(user) {
                const isPasswordValid = bcrypt.compareSync(password, user.password);

                if(isPasswordValid) {
                    console.log(req.session)
                    req.session.userId = user.id;
                    req.session.userRole = user.role;

                    if(user.role === 'administrator') {
                        return res.redirect('/admins')
                    } else {
                        return res.redirect('/users')
                    }


                } else {
                    const error = "invalid username/password"
                    return res.redirect(`/login?error=${error}`)
                }
            } else {
                const error = "invalid username/password"
                return res.redirect(`/login?error=${error}`)
            }
        })
        .catch((err) => {
            res.send(err)
            console.log(err)
        })
    }

    static users(req, res){
        let searchQuery = req.query.search
        // let search
        let filter = {}
        if (searchQuery) {
            filter = {
                investmentName: {
                [Op.iLike]: `%${searchQuery}%`
                }
            }
        }

        Investment.findAll({
            where: filter,
            include: {
                model: Company
            }
        })
        .then((investments) => {
            // res.send(investments)
            res.render('users', { investments })
        })
        .catch((err) => {
            console.log(err)
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
            let errors = []
            if (err.name == 'SequelizeValidationError') {
                err.errors.map(el => {
                errors.push(el.message)
                })
            }
            // res.render('add-investment', { errors })
            res.send(errors)
        })
    }

    static getEditInvestment(req, res){
        const { InvestmentId } = req.params
        let invest
        Investment.findByPk(InvestmentId)
        .then((investment) => {
            invest = investment
            return Company.findAll()
        })
        .then((companies) => {
            res.render('edit-investment', { InvestmentId, invest, companies })
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
            let errors = []
            if (err.name == 'SequelizeValidationError') {
                err.errors.map(el => {
                errors.push(el.message)
                })
            }
            // res.render('edit-investment', { errors })
            res.send(errors)
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
        req.session.destroy((err) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/')
            }
        })
    }

}

module.exports = Controller;