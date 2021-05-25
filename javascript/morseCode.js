// morse code dictionary is provided
// https://www.codewars.com/kata/54b724efac3d5402db00065e/

decodeMorse = function (morseCode) {
  words = morseCode.split('   ')
  let decoded = []
  for (word of words) {
    const decodedWord = word
      .split(' ')
      .map((letter) => {
        return MORSE_CODE[letter]
      })
      .join('')

    decoded.push(decodedWord)
  }
  return decoded.join(' ').trim()
}

// alternative solutions
decodeMorse2 = function (morseCode) {
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter]
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('')
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ')
}

decodeMorse3 = function (morseCode) {
  return morseCode
    .trim()
    .split(/  | /)
    .map((code) => MORSE_CODE[code] || ' ')
    .join('')
}
