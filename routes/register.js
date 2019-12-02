const express = require('express')
const Router = express.Router()
const Emp = require('../models/employee')

Router.route('/').get(function(req, res) {
    res.render('register', { err: '' })
})

Router.route('/').post(function(req, res) {
    const data = {
        'emp_id': req.body.id,
        'emp_password': req.body.password,
        'emp_firstName': req.body.firstName,
        'emp_lastName': req.body.lastName,
        'emp_type': req.body.type
    }
    Emp.create(data)
        .then(function(emp) {
            console.log(emp)
            console.log('create success!!')
            res.redirect('login')
        })
        .catch(function(err) {
            console.log('create error : id is not good!!')
            res.render('register', { err: 'id ซ้ำในระบบ' })
        })
})

module.exports = Router