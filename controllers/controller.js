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
        .catch((error) => {
            console.error(error);
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
        
    }

    static getInvest(req, res){
        
    }

    static postInvest(req, res){
        
    }

    static admins(req, res){
        
    }

    static getEditInvestment(req, res){
        
    }

    static postEditInvestment(req, res){
        
    }

    static getDeleteInvestment(req, res){
        
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