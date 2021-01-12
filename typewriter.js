const sentence = "hello there from lighthouse labs";
let sec = 0
for (const char in sentence) { 
  if (char != sentence.length-1){
  setTimeout(() => {
    process.stdout.write(sentence[char]);
  }, sec)
  } 
  else if (char == sentence.length-1) {
    setTimeout(() => {
      process.stdout.write(sentence[char] + '\n');
    }, sec)
  }
  sec = sec + 50;
}

