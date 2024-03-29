
const graph = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g','k'],
    j: ['i'],
    k: []
};

// const hasPath = (graph, src, dst) => {
//     if (src === dst) return true;
//     for (let neighbor of graph[src]) {
//         if(hasPath(graph, neighbor, dst) === true) {
//             return true;
//         }
//     }
//     return false;
// };

const hasPath = (graph, src, dst) => {
    const queue= [ src ];

    while (queue.length > 0) {
        const current = queue.shift();

        if(current === dst) return true;

        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    return false;
};


console.log(hasPath(graph, 'f', 'k')); //true