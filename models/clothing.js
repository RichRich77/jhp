module.exports = function (sequelize, DataTypes) {
    var Clothing = sequelize.define("Clothing", {
        clothing_type: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["shirt", "short", "pant", "sock", "underwear"],
        },
        gender: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["male", "female", "unisex"],
        },
        small_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100,
            validate: {
                isNumeric: true,
            }
        },
        medium_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100,
            validate: {
                isNumeric: true,
            }
        },
        large_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100,
            validate: {
                isNumeric: true,
            }
        },
        color: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["white", "black", "blue", "red", "green"],
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false, 
            validate: {
                isNumeric: true
            }
        },
        image: {
            type: DataTypes.STRING
        }
    });
    return Clothing; 
};

