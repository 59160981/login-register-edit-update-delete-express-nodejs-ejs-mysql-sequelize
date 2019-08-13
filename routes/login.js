const express = require('express');
const Router = express.Router();
const Emp = require('../models/employee');

Router.route('/').get(function(req, res) {
    res.render('login', { err: '' })
})

Router.route("/").post(function(req, res) {
    const id = req.body.id
    const password = req.body.password
    Emp.findAll({ where: { 'emp_id': id, 'emp_password': password } })
        .then(function(emp) {
            // console.log(emp[0].get())
            console.log('login success!')
            res.render('profile', { emp: emp[0].get() })
        })
        .catch(function(err) {
            console.log('login fail!')
            res.render('login', { err: 'ข้อมูลไม่ถูกต้อง' })
        })
})

//edit
Router.route('/edit/:id').get(function(req, res) {
    const id = req.params.id
    Emp.findAll({ where: { 'emp_id': id } })
        .then(function(emp) {
            res.render('edit', { emp: emp[0].get() })
        })
})

Router.route('/edit/:id').post(function(req, res) {
    const id = req.params.id
    Emp.findAll({ where: { 'emp_id': id } })
        .then(function(emp) {
            console.log(emp[0])
            emp[0].emp_id = id
            emp[0].emp_password = req.body.password
            emp[0].emp_firstName = req.body.firstName
            emp[0].emp_lastName = req.body.lastName
            emp[0].save().then(function(emp) {
                console.log('update success!')
                Emp.findAll({ where: { 'emp_id': id } })
                    .then(function(emp) {
                        res.render('profile', { emp: emp[0].get() })
                    })
            })
        })

})

//delete
Router.route('/delete/:id').get(function(req, res) {
    const id = req.params.id
    Emp.destroy({ where: { 'emp_id': id } })
        .then(function() {
            console.log('delete success!')
            res.render('login', { err: '' })
        })
})
module.exports = Router