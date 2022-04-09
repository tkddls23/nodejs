암호화 - 평문을 암호로 만든다
복호화 - 암호를 평문으로 만든다

해시 - 단방향 암호화 - 암호를 평문으로만드는데 평문을 암호로 바꿀수가없음
- 안전한 이유? = ex) zerocho -> zcho로 해시화한다면 항상 zcho로 해시화함 서버어디에도 zerocho라는 단어는 없음 zcho와 비교할뿐
- 최신 기법의 해시는 해독하는데 매우매우 오래걸림 - 안전

# createHash - 사용할 해시 알고리즘을 넣어준다
- md5 sha1 sha256 sha512 등 있지만 md5 sha1은 이미 취약점 발견
- sha512추천

ex)
const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

 digest(인코딩): 인코딩할 알고리즘을 넣습니다. base64, hex, latin1이 주로 사용

 base64가 결과 문자열이 가장 짧아 애용


# pbkdf2
pbkdf2는 간단하지만 bcrypt나 scrypt보다 취약하므로 나중에 더 나은 보안이 필요하면 bcrypt나 scrypt 방식을 사용
# bcrypt - 이런거 써도됨 - 노드에서는 지원안함

# 양방향 암호화 - 암호문 복호화 가능

- key가사용
- 암호화 복호화시 같은 key를 사용해야한다
- 같은 key를 가진다는 점에서 취약하다 key관리를 잘해야한다

# 현업에서 key관리 - aws kms 사용도함

