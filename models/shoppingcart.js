module.exports = function (sequelize, DataTypes) {
    var ShoppingCart = sequelize.define("ShoppingCart", {
        productID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100,
            validate: {
                isNumeric: true,
            }
        },
        size: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["s", "m", "l"]
        }
    });
    return ShoppingCart;
};