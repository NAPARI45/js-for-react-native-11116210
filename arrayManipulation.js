function processArray(numbers){
    return numbers.map(number =>{
        if (number % 2 === 0){
            return number * number;

        } else {
    
            return number * 3; 
    } 

    });
}


const inputArray = [1, 2, 3, 4, 5];
const answerArray = processArray(inputArray);
console.log(answerArray);