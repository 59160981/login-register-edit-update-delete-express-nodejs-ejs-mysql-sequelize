const express = require('express')
const Router = express.Router()
const Emp = require('../models/employee')
emp_login = ''

Router.route('/').get(function(req, res) {
    if (emp_login == '') {
        res.redirect('/')
    } else {
        Emp.findOne({ where: { 'emp_id': emp_login } })
            .then(function(emp) {
                res.render('employee', { emp: emp })
            })
    }
})

module.exports = Router