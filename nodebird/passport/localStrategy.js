const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/user');

//done 호출시 다시 auth로
module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'email', //req.body.email
    passwordField: 'password', //req.body.password
  }, async (email, password, done) => {
    try {
      const exUser = await User.findOne({ where: { email } }); //email 여부 check
      if (exUser) {
        const result = await bcrypt.compare(password, exUser.password); //pwd 비교
        if (result) {
          done(null, exUser); //pwd일치
        } else {
          done(null, false, { message: '비밀번호가 일치하지 않습니다.' }); //pwd 불일치
        }
      } else {
        done(null, false, { message: '가입되지 않은 회원입니다.' }); //email없음
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};