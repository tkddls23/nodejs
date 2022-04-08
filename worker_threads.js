// 멀티스레드 지원 - node에서 멀티스레드 쓰는건 거의 안씀

const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) { //메인스레드
    const worker = new Worker(__filename);
    worker.on('message',(value)=>{
        console.log('워커로부터',value);
    });
    worker.on('exit',()=>{
        console.log('워커 끝');
    });
    worker.postMessage('ping'); // 워커 스레드에게 ping을 보냄
} else{ //워커스레드
    parentPort.on('message',(value)=>{
        console.log('부모로부터',value);
        parentPort.postMessage('pong');
        parentPort.close();
    }); //부모로부터 message를 받음 value에 ping이 들어옴
}
