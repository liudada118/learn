var pool; 
function allocPool() { 
 pool = new SlowBuffer(Buffer.poolSize); 
 pool.used = 0;
 console.log(pool) 
}
allocPool()
console.log(pool)