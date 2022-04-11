• req.app: req 객체를 통해 app 객체에 접근할 수 있습니다. req.app.get('port')와 같은 식으로 사용할 수 있습니다.

• req.body: body-parser 미들웨어가 만드는 요청의 본문을 해석한 객체입니다.

• req.cookies: cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체입니다.

• req.ip: 요청의 ip 주소가 담겨 있습니다.

• req.params: 라우트 매개변수에 대한 정보가 담긴 객체입니다.

• req.query: 쿼리스트링에 대한 정보가 담긴 객체입니다.

• req.signedCookies: 서명된 쿠키들은 req.cookies 대신 여기에 담겨 있습니다.

• req.get(헤더 이름): 헤더의 값을 가져오고 싶을 때 사용하는 메서드
