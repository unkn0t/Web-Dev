function min(a, b) {
    return a < b ? a : b;
}

function pow(x, n) {
    if (n === 1)
        return x;

    let half = pow(x, Math.floor(n / 2));
    return half * half * (n % 2 ? x : 1);
}