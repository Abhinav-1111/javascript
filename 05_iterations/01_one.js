// loop

for(let i=0; i<=10; i++){
    if (i == 5) {
        // console.log("5 is best number");
    }
    // console.log(i);
}

// console.log(i)

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(i + ` * ` +j + ` =` + i*j);
    } 
}

let myArray = ["superman", "batman", "iron man"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// break and continue

// for (let i = 0; i <= 20; i++) {
//     if (i==5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is ${i}`);
    
// }
for (let i = 0; i <= 20; i++) {
    if (i==5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${i}`);
    
}