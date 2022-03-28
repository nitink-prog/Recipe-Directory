// utility function to capitalize first letter of every word

export default function wordCap(sentence) {
  // dump all words into an array
  const words = sentence.split(" ");
  // empty array to fill with capitalized words
  let result = [];
  words.forEach((word) => {
    result.push(word[0].toUpperCase() + word.substring(1));
  });
  // turn array back into a string

  console.log(result.join(" "));
  return result.join(" ");
}
