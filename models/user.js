module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 12]
        },
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 12]
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, 20],
          isUppercase: true,
          isLowercase: true,
          isInt: true
        }
      },
    });
    return User;
  };