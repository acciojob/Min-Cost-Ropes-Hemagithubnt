function mincost(arr) {
    // If array has 0 or 1 element, no connection needed
    if (arr.length <= 1) {
        return 0;
    }
    
    // Sort array in ascending order
    arr.sort((a, b) => a - b);
    
    let totalCost = 0;
    
    // Keep connecting two smallest ropes until one rope remains
    while (arr.length > 1) {
        // Remove two smallest elements
        const first = arr.shift();   // Smallest
        const second = arr.shift();  // Second smallest
        
        // Cost to connect them
        const cost = first + second;
        
        // Add to total cost
        totalCost += cost;
        
        // Insert the connected rope back into array
        arr.push(cost);
        
        // Re-sort to keep smallest elements at front
        arr.sort((a, b) => a - b);
    }
    
    return totalCost;
}

module.exports = mincost;
