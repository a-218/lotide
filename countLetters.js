const countLetters = function(sentence) {
  let newObject = {};
  for (const letter of sentence) {
    if (newObject[letter]) {
      newObject[letter]++;
    } else {
      newObject[letter] = 1;
    }
  }
  delete newObject[' '];
  console.log(newObject);
};


countLetters("lighthouse in the house");

