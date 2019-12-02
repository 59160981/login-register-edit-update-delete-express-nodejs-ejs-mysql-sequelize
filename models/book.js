const Sequelize = require('sequelize')
const db = require('../database/local-database')

var Book = db.define('book', {
    book_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        field: 'book_id'
    },
    book_name: {
        type: Sequelize.STRING,
        field: 'book_name'
    },
    book_amount: {
        type: Sequelize.INTEGER,
        field: 'book_amount'
    },
    book_type: {
        type: Sequelize.STRING,
        field: 'book_type'
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Book