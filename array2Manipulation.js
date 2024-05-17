function processArray(numbers){
    return numbers.map(number =>{
        if (number % 2 === 0){
            return number * number;

        } else {
    
            return number * 3; 
    } 

    });
}




function formatArrayStrings(strings, processedNumbers) {
    
    return strings.map((str, index) => {
        
        const number = processedNumbers[index];
        
        
        if (number % 2 === 0) {
           
            return str.toUpperCase();
        } else {
            
            return str.toLowerCase();
        }
    });
}
