

// Write a function that takes a number and returns the
//  perimeter of either a circle or a square. The input will
//   be in the form (letter l, number num) where the letter will
//   be either "s" for square, or "c" for circle, and the number
//    will be the side of the square or the radius of the circle.





function perimeter(l, num){
    let result = 0
    l === 's' ? result = num * 4 : '' 
    l === 'c' ? result = num * 6.28 : '' 
    return result
	
}

console.log( perimeter('s', 9));    // 36
console.log( perimeter('s', 7));    // 28
console.log( perimeter('c', 4));    // 25.12
console.log( perimeter('c', 9));    // 56.52