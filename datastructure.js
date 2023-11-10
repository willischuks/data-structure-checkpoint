        // problem 1
        
function findSumOfDistinctElements(set1, set2) {
    // Create a set to store the distinct elements.
    const distinctElements = new Set();

    // Add all elements from the first set to the distinct elements set.
    set1.forEach((element) => distinctElements.add(element));

    // Add all elements from the second set to the distinct elements set.
    set2.forEach((element) => distinctElements.add(element));

    // Calculate the sum of all distinct elements.
    let sumOfDistinctElements = 0;
    distinctElements.forEach((element) => {
        sumOfDistinctElements += element;
    });

    // Return the sum of all distinct elements.
    return sumOfDistinctElements;
    }

  // Example usage:

    const set1 = [3, 1, 7, 9];
    const set2 = [2, 4, 1, 9, 3];

  // Find the sum of all distinct elements from the given two sets.
    const sumOfDistinctElements = findSumOfDistinctElements(set1, set2);

  // Print the result.
    console.log(`Sum of distinct elements: ${sumOfDistinctElements}`);

        // problem 2

    // Calculate the dot product of two vectors.
const v1 = [1, 2, 3];
const v2 = [4, 5, 6];
const ps = dotProduct(v1, v2);

// Print the dot product.
console.log(`Dot product: ${ps}`);

// Determine whether two vectors are orthogonal.
const areOrthogonal = areOrthogonal(v1, v2);

// Print the result.
console.log(`Are orthogonal: ${areOrthogonal}`);

// Determine whether two vectors are orthogonal using a dot product function.
const areOrthogonalUsingDotProductFunction = areOrthogonalUsingDotProductFunction(v1, v2, dotProduct);

// Print the result.
console.log(`Are orthogonal using dot product function: ${areOrthogonalUsingDotProductFunction}`);
