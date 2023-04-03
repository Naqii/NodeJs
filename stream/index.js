const fs = require('fs');

const readableStream = fs.createReadStream('./input.txt', {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream('output.txt');

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch {
        console.log('Gagal membaca berkas');
    }
});

readableStream.on('end', () => {
    console.log('Done');
});

writableStream.write('Lorem ipsum dolor sit amet\n');
writableStream.write('consectetur adipiscing elit\n');
writableStream.write('sed do eiusmod tempor incididunt\n');
writableStream.end('ut labore et dolore magna aliqua\n');
