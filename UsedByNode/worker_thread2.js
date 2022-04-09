// 멀티스레드 지원 - node에서 멀티스레드 쓰는건 거의 안씀

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) { //메인스레드
    const threads = new Set();
    threads.add(new Worker(__filename, {
        workerData: {start: 1},
    }));
    threads.add(new Worker(__filename, {
        workerData: {start: 2},
    }));

    for (let worker of threads){
        worker.on('message',(value)=>{
            console.log('워커로부터',value);
        });
        worker.on('exit',()=>{
            threads.delete(worker); // 작업이 끝나면 worker삭제
            if (threads.size === 0) {
                console.log('워커 끝');
            }
        });
    }
} else{ //워커스레드
    const data = workerData;
    parentPort.postMessage(data.start+100);
}
