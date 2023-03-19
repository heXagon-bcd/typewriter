const sentence = "hello there from lighthouse labs"

timer = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(`${char}`)//same line
    process.stdout.write(`\n ${char}`)//new line
  }, (timer +=50))//since the loop is complete at the same time, because the delay is all the same, it wont print, so you must create a timer loop
}
console.log(timer);
  
