const echo = (word) =>{
    return word;
} 
const shout = (word) =>{
    return word.toUpperCase();
}

const repeat = (word, n) => {
    newStr = word
    for (var i = 0; i < n-1; i ++) {
        newStr += ` ${word}`
    }
    return newStr;
}

const startOfWord = (word, n) =>{
    return word.substring(0,n);
}

const firstWord = (phrase) => {
    return phrase.split(' ')[0]
}

module.exports = {echo: echo, shout: shout, repeat: repeat, startOfWord: startOfWord, firstWord: firstWord};
