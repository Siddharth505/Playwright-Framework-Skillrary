function findMaxMin(arr) {
    // Step 1: Find the maximum element
    let max = Math.max(...arr);

    // Step 2: Find the minimum element
    let min = Math.min(...arr);

    // Step 3: Return the result
    return { max, min };
}

// Example input
let array = [5, 3, 8, 1, 9];
let { max, min } = findMaxMin(array);
console.log(`The maximum element is: ${max}`);
console.log(`The minimum element is: ${min}`);