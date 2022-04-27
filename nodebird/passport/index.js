const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');

module.exports = () => {
  passport.serializeUser((user, done) => { 
    done(null, user.id); //session에 user의 id만 저장 = 회원정보가 많아질수있어서 id만 저장
    //실무에서는 id만해도 너무 많아 memory를 따로 저장하는 db도 있다
    //성공시 다시 auth로
  });

  passport.deserializeUser((id, done) => { //login한 후 요청이 있을때
    User.findOne({ where: { id } })
      .then(user => done(null, user)) // req.user
      .catch(err => done(err));
  });

  local();
  kakao();
};