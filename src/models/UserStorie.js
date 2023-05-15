const { Model, DataTypes } = require('sequelize');

class UserStorie extends Model {
    static init(sequelize) {
        super.init({
            input_storie: DataTypes.STRING,
            output_storie: DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = UserStorie;