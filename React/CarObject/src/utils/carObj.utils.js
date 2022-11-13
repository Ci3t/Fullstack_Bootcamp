export const getFirstToUpper = (word) => {
  // We did it at the css
  //  word = word[0].toUpperCase() + word.slice(1);
  if (word.includes('_')) {
    return word.split('_').join(' ');
  }
  return word;
};
