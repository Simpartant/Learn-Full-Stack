const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, 1500);
    });
    return promise;
};


setTimeout(() => {
    console.log('son dep trai');
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    }).then(a => {
        console.log(a);
    })
}, 2000);

console.log('hello');
console.log('123');
