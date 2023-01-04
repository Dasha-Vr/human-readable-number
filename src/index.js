module.exports = function toReadable (number) {
    let listOfNumbers = ['one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let listOfDozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'] 
    
    if (number === 0) {
        return 'zero'
    } 
    if (number <= 19) {
        return listOfNumbers[number - 1];
    }
    else if (number < 100){
        number = number.toString()
        if (number[1] === '0'){
            return  `${listOfDozens[number[0] - 2]}`
        }
        return `${listOfDozens[number[0] - 2]} ${listOfNumbers[number[1] - 1]}`
    }
    else if (number < 1000){
        number = number.toString()
        if (number.slice(1,3) === '00'){
            return `${listOfNumbers[number[0] - 1]} hundred`
        }
        
        else if (number[1] === '0'){
            return `${listOfNumbers[number[0] - 1]} hundred ${listOfNumbers[number[2] - 1]}`
        }
        
        else if (+number.slice(1, 3) < 20) {
            return `${listOfNumbers[number[0] - 1]} hundred ${listOfNumbers[+number.slice(1, 3) - 1]}` 
        }

        else if (number[2] === '0'){
            return `${listOfNumbers[number[0] - 1]} hundred ${listOfDozens[number[1] - 2]}`
        }
        
        return `${listOfNumbers[number[0] - 1]} hundred ${listOfDozens[number[1] - 2]} ${listOfNumbers[number[2] - 1]}`
    }
    
}

