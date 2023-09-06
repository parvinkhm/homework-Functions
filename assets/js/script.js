"use strict";


// function sum(n) {

//          if (n % 3 == 0  && n % 7 == 0) {
//              console.log("bolunur");
//          }else{
//             console.log("bolunmur");
//          }

//  }

//  sum(21);


//       function numbers(arr){
//        let sum = 0;
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i]%2 == 0) {
//                 sum+=arr[i]**2
//             }
            
//         }

//      console.log(sum);
//  }
//  let arr =[1, 2, 3, 4, 5]
//  numbers(arr)


//  function nums(arr){
//     let sum = 0;
//      for (let i = 0; i < arr.length; i++) {
//          if (arr[i]%2 == 1) {
//              sum+=arr[i]
//          }
         
//      }

//   console.log(sum);
// }
// let arr =[1, 2, 3, 4, 5]
// nums(arr)



function test(arr){
    let sum = 0;
     for (let i = 0; i < arr.length; i++) {
         if (arr[i]%2 == 0) {
             sum+=arr[i]
         }
         
     }

  console.log(sum);
}
let arr =[1, 2, 3, 4, 5]
test(arr)