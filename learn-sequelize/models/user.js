const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(20),
        allowNull: false, //not null
        unique: true,
      },
      age: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      married: {
        type: Sequelize.BOOLEAN, //true false
        allowNull: false,
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE, // datetime, mysql date -> sequelize dateonly
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      timestamps: false, // true면 createdat updatedat을 넣어줌
      underscored: false, // _로 만들어줌 컬럼을
      modelName: 'User',
      tableName: 'users', // 국룰
      paranoid: false, // true면 deletedat 도 만들어준다 - soft delete
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' }); // commenter라는 컬럼이 내(user의) id를 참조하고있다는 뜻
  }
};