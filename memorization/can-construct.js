const canContruct = (targetWord, wordBank, memo= {}) => {
    if (targetWord in memo) return memo[targetWord];
    if (targetWord === '') return true;

    for (let word of wordBank) {
        if ( targetWord.indexOf(word) === 0) {
            const suffix = targetWord.slice(word.length);
            if (canContruct(suffix, wordBank, memo) === true) {
                memo[targetWord] = true
                return true;
            }
        }
    }
    memo[targetWord] = false;
    return false;
};

console.log(canContruct('abcdef', ['ab', 'abc','cd', 'def', 'abcd']));
console.log(canContruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska','sk', 'boar']));
console.log(canContruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot','o', 't']));
console.log(canContruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
