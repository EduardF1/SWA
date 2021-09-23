// a) Create a function that takes a value, n, and returns a function that raises its argument to the power of n.
const n = (n) => (a) => Math.pow(a, n);

// b) Create a function that returns a function that gives subsequent elements of the Fibonacci sequence.
const fibonacci = (n) => {
    let i, sequence = [0, 1];
    for (i = 1; i < n - 1; i++)
        sequence.push(sequence[i] + sequence[i - 1]);
    return sequence;
}

