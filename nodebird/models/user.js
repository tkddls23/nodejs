const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
    return super.init({
        email: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
        },
        nick: {
        type: Sequelize.STRING(15),
        allowNull: false,
        },
        password: {
        type: Sequelize.STRING(100),
        allowNull: true, // 카카오 등 sns로그인시 비밀번호 null이기 때문
        },
        provider: { //로그인 제공자
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: 'local',
        },
        snsId: {
        type: Sequelize.STRING(30),
        allowNull: true,
        },
    }, {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: true, //삭제 시간 - 복구위해
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    }

    static associate(db) {
    db.User.hasMany(db.Post);
    db.User.belongsToMany(db.User, {
        foreignKey: 'followingId',
        as: 'Followers',
        through: 'Follow',
    });
    db.User.belongsToMany(db.User, {
        foreignKey: 'followerId',
        as: 'Followings',
        through: 'Follow',
    });
    }
};