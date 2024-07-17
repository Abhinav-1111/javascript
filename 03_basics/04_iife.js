// Immediately invovked Function Expression (IIFE)

// named IIFE
(function chai(){
    console.log(`DB Connected`);
})();

// Simple IIFE
((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})("Abhinav")