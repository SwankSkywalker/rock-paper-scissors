// Function for computer Selection of RPS
function compuChoice() {
   let num = (Math.floor(Math.random() * 3))
    if (num === 0) {
    return 'Rock';
    } 
    else if (num === 1) {
        return 'Paper';
    }
    else if (num === 2){
        return 'Scissors';
    }

}
console.log(compuChoice());