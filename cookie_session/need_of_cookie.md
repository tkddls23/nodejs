# 요청의 단점 
- 누가 요청을 보냈는지 모른다 - ip,브라우저주소 정도만 안다
-> 쿠키와 세션의 필요성

# 쿠키 : 키=값의 쌍
- name=wonseok
- 매 req마다 서버에 동봉해서 보낸다
- 서버는 쿠키를 읽어 누구인지 파악한다.
- writeHead - Set-Cookie - 형식으로 키=값형식으로 보낼수있다
- req.headers.Cookie - header를 읽어 쿠키가져옴

# expires = 날짜만료 기한 쿠키의 만료기한
# Max-age - expires와 비슷 - 날짜 대신 초를 입력할수 있다 - expires는 날짜를 처음에 설정해야하는데 그럴필요 x