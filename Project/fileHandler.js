import fs from "fs/promises";

const userInput = process.argv.slice(2);

if (userInput[0].toUpperCase() === 'READ') {
    const content = await fs.readFile(userInput[1])
    console.log(content.toString());
}
else if (userInput[0].toUpperCase() === 'WRITE') {
    const contentToWrite = userInput.slice(2).join(' '); 
    await fs.writeFile(userInput[1], contentToWrite); 
    console.log('Write content to a file.');
}
else if (userInput[0].toUpperCase() === 'RENAME') {
    await fs.rename(userInput[1],userInput[2])
    console.log('Rename a file.');
}
else if (userInput[0].toUpperCase() === 'DELETE') {
   await fs.rm(userInput[1],{recursive:true}) 
      console.log('Delete a file..')
}
else if (userInput[0].toUpperCase() === 'LIST') {
  const files = await fs.readdir('.')
  files.map((file)=>{
    console.log(file); 
  })
}

/*
node fileManager.js read <filename> → Read and display the file content.  [complete]
node fileManager.js write <filename> <content> → Write content to a file.   
node fileManager.js rename <oldname> <newname> → Rename a file.
node fileManager.js delete <filename> → Delete a file.
node fileManager.js list → List all files in the current directory.
*/
