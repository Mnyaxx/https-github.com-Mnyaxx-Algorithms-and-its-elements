function insertionSort(arr) {
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element in a variable
        let current = arr[i];
        // Initialize a variable to keep track of the position where the current element will be inserted
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current, to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Place the current element into its correct position
        arr[j + 1] = current;
    }
    return arr;
}