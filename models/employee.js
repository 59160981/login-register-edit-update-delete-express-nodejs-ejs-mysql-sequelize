const Sequelize = require('sequelize')
const db = require('../database/local-database')

var Emp = db.define('employee', {
    emp_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        field: 'emp_id'
    },
    emp_password: {
        type: Sequelize.STRING,
        field: 'emp_password'
    },
    emp_firstName: {
        type: Sequelize.STRING,
        field: 'emp_firstName'
    },
    emp_lastName: {
        type: Sequelize.STRING,
        field: 'emp_lastName'
    },
    emp_type: {
        type: Sequelize.STRING,
        field: 'emp_type'
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Emp