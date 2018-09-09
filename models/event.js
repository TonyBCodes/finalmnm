// JavaScript source code
// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
require('dotenv').load();
const Sequelize = require("sequelize");

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
    const Event = sequelize.define("Event", {
        ev_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cust_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        ev_code: {
            type: Sequelize.STRING(16),
            allowNull: false,
            unique: true
        },
        ev_name: {
            type: Sequelize.STRING(40),
            allowNull: false
        },
        ev_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        ev_time: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        ev_pax: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        ev_drink1: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        ev_drink2: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        ev_drink3: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        ev_drink4: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        ev_drink5: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        ev_drink6: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        ev_addon1: {
            type: Sequelize.STRING(10),
            allowNull: true,
            defaultValue: null
        },
        ev_addon1_quant: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        ev_addon2: {
            type: Sequelize.STRING(10),
            allowNull: true,
            defaultValue: null
        },
        ev_addon2_quant: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        ev_addon3: {
            type: Sequelize.STRING(10),
            allowNull: true,
            defaultValue: null
        },
        ev_addon3_quant: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        ev_addon4: {
            type: Sequelize.STRING(10),
            allowNull: true,
            defaultValue: null
        },
        ev_addon4_quant: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        ev_addon5: {
            type: Sequelize.STRING(10),
            allowNull: true,
            defaultValue: null
        },
        ev_addon5_quant: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        ev_addon6: {
            type: Sequelize.STRING(10),
            allowNull: true,
            defaultValue: null
        },
        ev_addon6_quant: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        ev_note: {
            type: Sequelize.STRING(255),
            allowNull: true,
            defaultValue: null
        },
        ev_addr1: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        ev_addr2: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        ev_city: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        ev_state: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        ev_zip: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        ev_country: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        ev_paid: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        ev_pymt_suc_code: {
            type: Sequelize.STRING(10),
            allowNull: true,
            defaultValue:null
        },
        ev_pymt_timestamp: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue:null
        },
        ev_status: {
            type: Sequelize.ENUM('planning', 'paid','complete','cancelled'),
            allowNull: false,
            defaultValue: 'planning'
        }
    });

    //create Event association to Customer table
    Event.associate = function (models) {
        Event.hasOne(models.Customer, {
            foreignKey: "cust_id",
            constraints: false
        });
    };

    //create Event association to User table
    Event.associate = function (models) {
        Event.hasOne(models.User, {
            foreignKey: "user_id",
            constraints: false
        });
    };

    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    Event.prototype.validPassword = (password) => {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    Event.hook("beforeCreate", (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return Event;
};