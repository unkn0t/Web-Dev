let n = prompt('Enter n', 2);

for (let i = 2; i <= n; ++i) {
    let isPrime = true;

    for (let j = 2; j * j <= i; ++j) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}