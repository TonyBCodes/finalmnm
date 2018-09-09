// JavaScript source code
// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
require('dotenv').load();
const Sequelize = require("sequelize");
const Event = require("./event");

const sequelize = new Sequelize(process.env.DB_INFO, process.env.DB_ID, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const bcrypt = require("bcrypt-nodejs");

// Creating our User model
module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("Customer", {
        cust_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cust_password: {
            type: Sequelize.STRING(16),
            allowNull: false
        },
        cust_pw_update_code: {
            type: Sequelize.STRING(6),
            allowNull: true,
            defaultValue: null
        },
        cust_pw_update_time: {
            type: Sequelize.DATE,
            defaultValue: null
        },
        cust_email: {
            type: Sequelize.STRING(30),
            allowNull: false,
            unique: true
        },
        cust_firstname: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        cust_lastname: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        cust_addr1: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        cust_addr2: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        cust_city: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        cust_state: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        cust_zip: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        cust_country: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        cust_phone: {
            type: Sequelize.STRING(15),
            allowNull: false
        },
        cust_dob: {
            type: Sequelize.DATE,
            allowNull: false
        },
        cust_last_login: {
            type: Sequelize.DATE,
            allowNull: true
        },
        cust_status: {
            type: Sequelize.ENUM('active', 'inactive'),
            allowNull: false,
            defaultValue: 'inactive'
        }
    });

    //create Customer association to Event table
    Customer.associate = function (models) {
        Customer.hasMany(models.Event, {
            foreignKey: "cust_id"
        });
    };


    //Make accociations between customer table and event table


    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    Customer.prototype.validPassword = function(password){
        //console.log(password, "   ", this.cust_password,"   ",this);
        return password === this.cust_password;
        //return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    Customer.hook("beforeCreate", (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return Customer;
};