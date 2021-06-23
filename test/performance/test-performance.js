const logTable = (title, init, enumerable, native, ...counts) => {
    let table = [];
    let now, er, nr, line;
    for (let count of counts) {
        let array = init(count);
        now = +Date.now();
        er = enumerable(array);
        line = { [title]: count, 'Enumerable': +Date.now() - now };
        now = +Date.now();
        nr = native(array);
        if (!(/rand/.test(title))) {
            if (er !== nr) {
                if (Array.isArray(er) && Array.isArray(nr)) {
                    if (er.length !== nr.length) {
                        console.error(title, 'result not same', er.length, nr.length);
                    } else if (!Enumerable.zip(er, nr, (l, r) => l === r).all(e => e)) {
                        console.error(title, 'result not same', er, nr);
                    }
                } else {
                    console.error(title, 'result not same', er, nr);
                }
            }
        }
        line['Native'] = +Date.now() - now;
        table.push(line);
    }
    console.table(table, [title, 'Enumerable', 'Native']);
}

const defaultGenerator = count => {
    let array = [];
    for (let i = 0; i < count; i++) {
        array.push(Math.random());
    }
    return array;
};
const rangeGenerator = (min, max) => count => {
    let size = max - min;
    let array = [];
    for (let i = 0; i < count; i++) {
        array.push(Math.floor(Math.random() * size) + min);
    }
    return array;
}

logTable(
    'random',
    defaultGenerator,
    array => {
        return Enumerable.random(array);
    },
    array => {
        return array[Math.floor(array.length * Math.random())];
    },
    100000,
    1000000,
    10000000
);
logTable(
    'max',
    defaultGenerator,
    array => {
        return Enumerable.max(array);
    },
    array => {
        let max = 0;
        for (let element of array) {
            if (element > max) {
                max = element;
            }
        }
        return max;
    },
    100000,
    1000000,
    10000000
);
logTable(
    'take+max',
    defaultGenerator,
    array => {
        return Enumerable.take(array,array.length / 10).max();
    },
    array => {
        let max = 0, length = array.length / 10;
        for (let i = 0; i < length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    },
    1000000,
    10000000,

);
logTable(
    'order+take',
    defaultGenerator,
    array => {
        return Enumerable.orderBy(array).takeProportion(0.0001).toArray();
    },
    array => {
        array = [...array].sort((a, b) => a - b);
        return array.slice(0, array.length / 10000);
    },
    100000,
    500000
);
logTable(
    'order+skip',
    defaultGenerator,
    array => {
        return Enumerable.orderBy(array).skipProportion(0.9).toArray();
    },
    array => {
        array = [...array].sort((a, b) => a - b);
        return array.slice(array.length / 10 * 9);
    },
    100000,
    500000
);
logTable(
    'distinct+order+take',
    rangeGenerator(0, 10000),
    array => {
        return Enumerable.distinct(array).orderBy().take(100).toArray();
    },
    array => {
        let result = [];
        for (let element of array) {
            if (result.indexOf(element) === -1) {
                result.push(element);
            }
        }
        result.sort((a, b) => a - b);
        return result.slice(0, 100);
    },
    10000,
    100000
);
logTable(
    'group+order',
    rangeGenerator(0, 100000),
    array => {
        return Enumerable.groupBy(array, v => Math.floor(v / 100)).orderByDescending(group => group.count()).take(50).map(group => group.key).toArray();
    },
    array => {
        let result = [];
        for (let element of array) {
            let key = Math.floor(element / 100);
            let node = result.find(node => node.key === key);
            if (node) {
                node.count++;
            } else {
                result.push({
                    key, count: 1
                })
            }
        }
        result = result.sort((a, b) => b.count - a.count);
        return result.slice(0, 50).map(e => e.key);
    },
    10000,
    100000
);