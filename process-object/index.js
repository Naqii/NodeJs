const initialMemoryUsage = process.memoryUsage();
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i = 0; i <= 10000; i++) {
    
}

const currentMemoryUsage = process.memoryUsage();

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage.rss} naik ke ${currentMemoryUsage.rss}`);
