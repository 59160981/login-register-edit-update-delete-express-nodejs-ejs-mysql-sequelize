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
                    Emp.findAll()
                        .then(function(user) {
                            res.render('admin-user-manage', { emp: emp, user: user })
                        })
                })
        }
    })
    //add
Router.route('/addUser').get(function(req, res) {
    if (emp_login == '') {
        res.redirect('/')
    }
    Emp.findOne({ where: { 'emp_id': emp_login } })
        .then(function(emp) {
            Emp.findAll()
                .then(function(user) {
                    res.render('admin-addUser', { emp: emp, err: '' })
                })
        })
})
Router.route('/addUser').post(function(req, res) {
    const data = {
        'emp_id': req.body.id,
        'emp_password': req.body.password,
        'emp_firstName': req.body.firstName,
        'emp_lastName': req.body.lastName,
        'emp_type': req.body.type
    }
    Emp.create(data)
        .then(function(emp) {
            console.log('create success!!')
            res.redirect('/user-manage')
        })
        .catch(function(err) {
            console.log('create error : id is not good!!')
            res.render('admin-addUser', { err: 'id ซ้ำในระบบ' })
        })
})

//edit
Router.route('/edit/:id').get(function(req, res) {
    if (emp_login == '') {
        res.redirect('/')
    } else {
        const id = req.params.id
        Emp.findOne({ where: { 'emp_id': emp_login } })
            .then(function(emp) {
                Emp.findOne({ where: { 'emp_id': id } })
                    .then(function(user) {
                        res.render('admin-edit', { emp: emp, user: user })
                    })
            })
    }
})

Router.route('/edit/:id').post(function(req, res) {
    const id = req.params.id
    Emp.findOne({ where: { 'emp_id': id } })
        .then(function(emp) {
            emp.emp_id = id
            emp.emp_password = req.body.password
            emp.emp_firstName = req.body.firstName
            emp.emp_lastName = req.body.lastName
            emp.emp_type = req.body.type
            emp.save().then(function(emp) {
                console.log('update success!')
                if (id == emp_login) {
                    res.redirect('/')
                }
                res.redirect('/admin-user-manage')
            })
        })
})

//delete
Router.route('/delete/:id').get(function(req, res) {
    if (emp_login == '') {
        res.redirect('/')
    } else {
        const id = req.params.id
        Emp.destroy({ where: { 'emp_id': id } })
            .then(function() {
                console.log('delete success!')
                if (id == emp_login) {
                    res.redirect('/')
                }
                res.redirect('/user-manage')
            })
    }
})

module.exports = Router