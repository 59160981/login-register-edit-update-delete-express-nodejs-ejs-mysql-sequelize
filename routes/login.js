const express = require('express')
const Router = express.Router()
const Emp = require('../models/employee')
emp_login = ''

Router.route('/').get(function(req, res) {
    res.render('login', { err: '' })
})

Router.route("/").post(function(req, res) {
    const id = req.body.id
    const password = req.body.password
    Emp.findOne({ where: { 'emp_id': id, 'emp_password': password } })
        .then(function(emp) {
            if (emp) {
                emp_login = id
                console.log('login success!')
                if (emp.emp_type == 'Admin') {
                    res.redirect('user-manage')
                } else if (emp.emp_type == 'Employee') {
                    res.redirect('employee')
                }
            }
            console.log('login fail!')
            res.render('login', { err: 'ข้อมูลไม่ถูกต้อง' })
        })
})


module.exports = Router