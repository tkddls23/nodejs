# npm - Node Package Manager

- 많은이들이 이미 소스코드를 만들어놓음 - 저장소

# npm init

- 다운받은 버전들을 기록해두어야한다 - package.json - npm init

# npm init

# packagename - npm 이름

# version - 패키지의 버전 - npm의 버전은 다소 엄격하게 관리된다

# description

# entrypoint - version의 첫 진입점(js 실행파일 진입점)이 되는 파일 - 보통 # index.js

# test command - 코드를 테스트할 때 입력할 명령어

# git repo - 코드를 저장해둔 git 저장소 주소 나중에 소스에 문제가 생겼을시 사용자들이 이 저장소에 방문해 문제를 찾거나 코드 수정본을 올릴수도있다

# keywords

# author - 사용자의 이름 or id

# license - 보통 MIT(오픈소스) 오픈소스가 되길 원하지 않으면 적절하게 넣어야댐

# dependencies - package.json에 사용중인 버전이 추가됨

-> 버전관리를 잘해야 어떤 환경에서 설치해도 똑같다

# npm run test - package.json의 test부분이 실행된다

# npm (run) start // service를 시작하는 명령어

# npm i express - express 설치

# npm i -D nodemon - devDependencies가 추가됨

# dependencies와 devDependencies의 차이 dev는 개발시에만 사용되는 package들이고 전자는 배포시에도 사용되는 package

# package-lock.json - 정확한 버전을 기록함 - 버전문제아니면 거의 안건든다

# node_modules - 다운받은 package들 - 왜이렇게 많이 다운받아졌을까

=> express에서 가지고있는 package들도 같이 다운받는거
=> 용량을 많이 차지하기때문에 배포시에는 지운다
=> npm i 시 다시 설치됨
=> 설치 -> 배포시 삭제후 -> 해당서버에서 설치하도록한다
=> 어떤 server는 폐쇄망으로 구축해서 설치 못하는경우는 복사해서 들고가야한다

# npm i -g rimraf = g는 global 전역설치 - dependency가 기록이 안됨

- rimraf를 설치한다고 가정시 명령어처럼 쓸수있다 - 지우는 명령어
- rimraf node_modules - nodemodules를 지울수있다
- 플젝관리시 dependency에 기록이 안남아서 global설치를 기피한다
  => npm i rimraf -D 이렇게 쓴다 - 개발용으로만 쓴다는뜻
  => global처럼 쓰고싶다면 npx rimraf node_modules이렇게 쓰면된다

# 버전들이 다 세자리인 이유 - node생태계에서는 세자리로 만든다

# => SemVer - 유의적 버저닝 방식이라한다

- Major(주 버전 - 대대적 수정) Minor(부 버전 - 기존코드에서 안심수정) Patch(수 버전 - 마이너한 버그 수정)

# 다양한 npm 명령어들

# npm outdated - 어떤 패기지에 기능 변화가 생겼는지 알수있다
# npm uninstall 패키지명 or npm rm 패키지명 - remove package
# npm search 검색어 - npm package search (npmjs.com에서도 가능)
# npm info 패키지명 - package detail
# npm adduser - npmjs login
# npm login - npmjs login
# npm whoami - 로그인누가 했는지
# npm publish - publish package
# npm unpublish - unpublish package (whithin 72hours)
 - 다른 유저가 내 패키지를 사용중에 배포가 중단되면 문제가 생기기 때문
