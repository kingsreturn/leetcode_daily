const countConstruct = (targetWord, wordBank, memo= {}) => {
    if (targetWord in memo) return memo[targetWord];
    if (targetWord === '') return 1;

    let totalCount = 0;
    
    for (let word of wordBank) {
        if ( targetWord.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(targetWord.slice(word.length),wordBank,memo)
            totalCount += numWaysForRest;
        }
    }
    memo[targetWord] = totalCount;
    return totalCount;
};

console.log(countConstruct('purple',['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstruct('abcdef', ['ab', 'abc','cd', 'def', 'abcd'])); // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska','sk', 'boar'])); // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot','o', 't'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
