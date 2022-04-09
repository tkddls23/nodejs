const fs = require('fs');
const zlib = require('zlib'); // 파일 압축

const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./writeme4.txt.gz');

//readStream.pipe(writeStream);// writeStream으로 보내서 씀 16바이트씩
// 파일복사와 비슷

readStream.pipe(zlibStream).pipe(writeStream);
// 스트림을 압축해 보냄

//pipe - stream을 지원하는애들만 가능