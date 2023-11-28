// function remove_vowels(string) {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   return (
//     string
//       .split("")
//       // .filter((letter) => console.log(letter))
//       .filter((letter) => !vowels.includes(letter))
//       .join("")
//   );
// // }
// console.log(remove_vowels("moringa school"));

function remove_vowels(string) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let newString = string
    .split("")
    // .filter((letter) => console.log(letter))
    .filter((letter) => !vowels.includes(letter))
    .join("");

  return newString;
}
console.log(remove_vowels("MORINGA SCHOOL"));

// function oddNumberOfTimes(array) {
//     for
// }

// const students = [23, 28, 18, 19, 28, 18, 28, 21, 23];
// let a = 18;
// let b = 0;
// for (marks of students) {
//   if (marks == a) {
//     b++;
//   }
// }
// console.log(b);

// [2, 3, 2];

// function oddNumberOfTimes(array) {

//   array.forEach((element) => {
//     // let a = element;
//     let count = 0;
//     for (number of array) {
//       if (number == element) {
//         count++;
//       }
//     }
//   });

//   console.log(count);
// }

// // function passNums(nums) {
// //   const numCount = {};
// //   for (const num of nums){
// //     if num in numCount
// //   }

function findOddOccurrence(nums) {
  const numCount = {};

  // Count occurrences of each number in the array
  for (const num of nums) {
    if (num in numCount) {
      numCount[num]++;
    } else {
      numCount[num] = 1;
    }
  }
  console.log(numCount);

  // Find the number with an odd occurrence
  // Iterate over the entries of the object (numCount).
  for (const [num, count] of Object.entries(numCount)) {
    if (count % 2 !== 0) {
      return parseInt(num);
    }
  }
}

console.log(findOddOccurrence([1, 2, 2, 3, 3, 3, 4, 17, 4, 3, 3, 3, 2, 2, 1]));
