let tree = ({
    value: 'a',
    children: [
        {
            value: 'b',
            children: [
                { value: 'c' },
                { value: 'd' }
            ]
        },
        { value: 'e', }
    ]
}).asEnumerable(node => node.children, node => node.value);

console.log(tree.getChild(0).getChild(1).isDescendantOf(tree));

// 这段代码的输出结果如下：
//
// true