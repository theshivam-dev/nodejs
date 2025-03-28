import fs from 'fs/promises'

const filePath = process.argv.slice(2)
const file = filePath[0]
const letter = filePath[1]
let count = 0
const content = await fs.readFile(file,'utf-8')

const split = content.split(/\s+/);
// split.forEach((arr)=>{
//   if(arr.includes(letter)) {
//     count++
//   }
// })

// Count occurrences of the letter in the file content
  for (const char of content) {
    if (char === letter) {
        count++;
    }
}
console.log(count);
// console.log(split)



// by tutorial
const wordsCount = {}
split.forEach((word)=>{
  if (word in wordsCount) {
    wordsCount[word] += 1
  } else {
    wordsCount[word] = 1
  }
})

console.log(wordsCount);
