const gridTrveler = (m, n) => {
    const table =Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));
    //console.log(table);
    table[1][1] = 1;
    for(let i = 0; i <= m; i++){
        for(let j = 0; j <= n; j++){
            const current = table[i][j];
            if(j + 1 <= n) table[i][j + 1] += current;
            if(i + 1 <= m) table[i + 
                1][j] += current;
        }
    }
    return table;
};

console.log(gridTrveler(1, 1));
console.log(gridTrveler(3, 2));
console.log(gridTrveler(2, 3));
console.log(gridTrveler(3, 3));
//console.log(gridTrveler(18, 18));