const buf1 = new Buffer(10);        
const buf2 = new Buffer('hello');   
const buf3 = new Buffer([1, 2, 3]); 


// ------------Buffer-------------
const safeBuf = Buffer.alloc(10); 
const stringBuf = Buffer.from('hello');
const arrayBuf = Buffer.from([1, 2, 3]);

console.log(buf1);
console.log(buf2);
console.log(buf3);

console.log(safeBuf);
console.log(stringBuf);
console.log(arrayBuf);
