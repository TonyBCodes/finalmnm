// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
const bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_password: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        user_pw_update_code: {
            type: DataTypes.STRING(6),
            allowNull: true,
            defaultValue: null
        },
        user_pw_update_time: {
            type: DataTypes.DATE,
            defaultValue: null
        },
        usr_email: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        },
        usr_firstname: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        usr_lastname: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        usr_addr1: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        usr_addr2: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        usr_city: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        usr_state: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        usr_zip: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        usr_country: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        usr_phone: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        usr_dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        usr_tax_doc: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        usr_role: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        usr_last_login: {
            type: DataTypes.DATE,
            allowNull: true
        },
        usr_status: {
            type: DataTypes.ENUM('active', 'inactive'),
            allowNull: false,
            defaultValue: 'inactive'
        }
    });

    //create User association to Event table
    User.associate = function (models) {
        User.hasMany(models.Event, {
            foreignKey: "user_id"
        });
    };

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
