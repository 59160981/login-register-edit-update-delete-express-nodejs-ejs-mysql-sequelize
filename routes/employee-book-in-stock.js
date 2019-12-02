const express = require('express')
const Router = express.Router()
const Emp = require('../models/employee')
const Book = require('../models/book')
emp_login = ''

Router.route('/').get(function(req, res) {
    if (emp_login == '') {
        res.redirect('/')
    } else {
        Emp.findOne({ where: { 'emp_id': emp_login } })
            .then(function(emp) {
                Book.findAll()
                    .then(function(book) {
                        res.render('employee-book-in-stock', { emp: emp, book: book })
                    })
            })
    }
})

module.exports = Router