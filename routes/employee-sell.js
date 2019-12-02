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
                res.render('employee-sell', { emp: emp, book: [] })
            })
    }
})

Router.route('/').post(function(req, res) {
    Emp.findOne({ where: { 'emp_id': emp_login } })
        .then(function(emp) {
            const bookID = req.body.book_id
            Book.findOne({ where: { 'book_id': bookID } })
                .then(function(book) {
                    if (bookID == '') book = []
                    res.render('employee-sell', { emp: emp, book: book })
                })
        })
})

module.exports = Router