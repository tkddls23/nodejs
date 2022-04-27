const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

//회원가입

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { email, nick, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } }); //해당 email로 이미 가입한 사람이 있는가
    if (exUser) {
      return res.redirect('/join?error=exist');
    }
    const hash = await bcrypt.hash(password, 12); //password bcrypt hash화 12는 복자화 숫자(높을수록 보안up 속도down)
    await User.create({
      email,
      nick,
      password: hash,
    });
    return res.redirect('/'); //회원가입 성공시 다시 원래 page로 redirect
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

//login

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => { //localstrategey를 찾는다
    if (authError) { //server error의 경우
      console.error(authError);
      return next(authError);
    }
    if (!user) { //login 실패시
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => { //login시 user객체를 넣어 passport의 index.js로 간다
      if (loginError) { //error 발생시
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/'); //login 성공시
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout(); //session에서 정보를 지운다
  req.session.destroy();
  res.redirect('/');
});

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
  failureRedirect: '/',
}), (req, res) => {
  res.redirect('/');
});

module.exports = router;