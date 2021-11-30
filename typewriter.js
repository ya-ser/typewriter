const sentence = "My name is Yaser";
// console.log(sentence.length);
let delayTime = 0;
for (const char of sentence) {
  delayTime += 50;
  setTimeout(() => {
    process.stdout.write(char);
    // once the char is on last in
      // print n
  }, delayTime)
};

setTimeout(() => {
  process.stdout.write("\n")
}, delayTime);// newline once 

// for each character of sentence
  // setTimeout
    // output each character to cli
  // at a delay of 1 second for each character