'use strict';
/*
// Random value from array
let tricks = ['Kickflip', 'Fs Shuvit', 'Heelflip', 'Fs 180', 'Tre flip', 'Bs 180', 'Full Cab', 'Pop Shuvit', 'Half cab', 'Switch Fs 180'];

let randomTrick = tricks[Math.floor(Math.random() * tricks.length)];


// Delete selected randomTrick value from array
tricks = tricks.filter(trick => trick !== randomTrick)
console.log(randomTrick);
console.log(randomTrick);



console.log(tricks);

console.log(document.querySelector('.display-trick').textContent = 'Fs 180');
*/

let tricks = ['Fs 180', 'Bs 180', 'Half Cab', 'Fakie Fs 180', 'Ss Fs 180', 'Nollie Bs 180', 'Nollie Fs 180', 'Full Cab', 'Pop Shuvit', 'Fs Pop', 'Fakie Fs Pop', 'Fakie Bs Pop', 'Nollie Fs Pop', 'Nollie Bs Pop', 'Fakie Fs BigSpin', 'Fakie Bs BigSpin', 'Shuvit Fs Revert', 'Kickflip', 'Bs 180 Kickflip', 'Half Cab Flip', 'Fakie Kickflip', 'Heelflip', 'Fakie Heelflip', 'Varial Flip', 'Varial Heel', 'Tre flip', 'Nollie Heelflip', 'Nollie Kickflip'];

// Click for Trick Selector
document.querySelector('.trick').addEventListener('click', function() {
    document.querySelector('.trick').textContent = 'Make';
    document.querySelector('.hero-box1').style.backgroundImage = 'linear-gradient(150deg, #1EDAD2, #5B91CE)';
    document.querySelector('.hero-box2').style.backgroundImage = 'linear-gradient(150deg, #8678C5, #9549A4)';

    const randomTrick = tricks[Math.floor(Math.random() * tricks.length)];
 
    
    // Delete selected randomTrick value from array
    tricks = tricks.filter(trick => trick !== randomTrick)
    console.log(randomTrick);

    document.querySelector('.display-trick').textContent = randomTrick;

    if(randomTrick === undefined){
        document.querySelector('.display-trick').textContent = 'Out of tricks';
    }


})


//score
let score = 0;
document.querySelector('.trick').addEventListener('click', function() {
    
    score += 1;

    document.querySelector('.score').textContent = score;
     
    if (score > 28) {
        document.querySelector('.score').textContent = 'Too Good!';
    }
});

//no make

   

document.querySelector('.no-make').addEventListener('click', function() {
    let tricks = ['Fs 180', 'Bs 180', 'Half Cab', 'Fakie Fs 180', 'Ss Fs 180', 'Nollie Bs 180', 'Nollie Fs 180', 'Full Cab', 'Pop Shuvit', 'Fs Pop', 'Fakie Fs Pop', 'Fakie Bs Pop', 'Nollie Fs Pop', 'Nollie Bs Pop', 'Fakie Fs BigSpin', 'Fakie Bs BigSpin', 'Shuvit Fs Revert', 'Kickflip', 'Bs 180 Kickflip', 'Half Cab Flip', 'Fakie Kickflip', 'Heelflip', 'Fakie Heelflip', 'Varial Flip', 'Varial Heel', 'Tre flip', 'Nollie Heelflip', 'Nollie Kickflip'];
    document.querySelector('.score').textContent = '';
    document.querySelector('.trick').textContent = 'Select Trick';
    document.querySelector('.hero-box1').style.backgroundImage = 'linear-gradient(150deg, #24b3f4, #7848ce)';
    document.querySelector('.hero-box2').style.backgroundImage = 'linear-gradient(150deg, #e05376, #fc9339)';
    
    score = 0;

    document.querySelector('.display-trick').textContent = '';


    document.querySelector('.trick').addEventListener('click', function() {
        document.querySelector('.hero-box1').style.backgroundImage = 'linear-gradient(150deg, #24b3f4, #7848ce)';
        document.querySelector('.hero-box2').style.backgroundImage = 'linear-gradient(150deg, #e05376, #fc9339)';
        let randomTrick = tricks[Math.floor(Math.random() * tricks.length)];
    
        // Delete selected randomTrick value from array
        tricks = tricks.filter(trick => trick !== randomTrick)
    
       
    
        document.querySelector('.display-trick').textContent = randomTrick;
    
        if(randomTrick === undefined){
            document.querySelector('.display-trick').textContent = 'Out of tricks';
        }
    })
  
    
})


