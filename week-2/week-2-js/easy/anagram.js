/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  s = s.toLowerCase();
  t = t.toLowerCase();

  let countStr1 = new Array(26).fill(0);
  let countStr2 = new Array(26).fill(0);

  for (let i = 0; i < s.length; i ++) {
      countStr1[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
      countStr2[t[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  console.log(countStr1, countStr2)

  for (let i = 0; i < 26; i++) {
      if (countStr1[i] !== countStr2[i]) return false;
  }

  return true

}

module.exports = isAnagram;
