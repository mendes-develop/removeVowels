function disemvowel(str) {
   let string = str.replace(/a|e|i|o|u/gi, '')
  return string;
}

disemvowel("alex")