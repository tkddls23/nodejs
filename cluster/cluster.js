const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length; //cpu개수만큼 만들기위해서

if (cluster.isMaster) { //workerThread의 isMainthread랑 비슷
    //master process는 서버의 역할보다는 요청을 고르게 분배하는 역할을함
  console.log(`마스터 프로세스 아이디: ${process.pid}`);
  // CPU 개수만큼 워커를 생산
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork(); // master에서 worker process fork
  }
  // 워커가 종료되었을 때
  cluster.on('exit', (worker, code, signal) => {
    console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
    console.log('code', code, 'signal', signal);
    cluster.fork();
  });
} else {
  // 워커들이 포트에서 대기
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Cluster!</p>');
    setTimeout(() => { // 워커 존재를 확인하기 위해 1초마다 강제 종료
      process.exit(1);
    }, 1000);
  }).listen(8086); // 하나의 포트에서 여러개의 포트를 동시에 띄울수있다
// 서버에 요청을 roundRobine방식으로 고르게 배분해준다
  console.log(`${process.pid}번 워커 실행`);
}

// http clustering다 코드가 지저분하다 => 편하게 해주는 코드 존재(유지보수 및 관리 쉬운)