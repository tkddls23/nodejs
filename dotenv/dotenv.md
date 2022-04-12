# dotenv - not middleware 비밀키를 관리하는 용도로 씀

- ex) secret key(cookie or session)를 다른사람이 알면 보안취약
- 소스코드에 그대로 묻어있는 secret key를 관리할필요성 있음
  -> 환경변수에 숨겨놓는다

- .env를 만들어 관리 (;붙히면 안된다)
