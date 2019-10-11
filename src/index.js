const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('');
    oldLength = arr.length;
    for(let i = 0; i < oldLength + 1; i += 10)
    {
        let newArr = [];
        for(let j = 0; j < 10; j++)
        {
            newArr.push(arr[i + j]);
        }
        arr.push(newArr);
    }
    arr.splice(0, oldLength);
    let interimResult = [];
    let result = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(interimResult[0] === ' '){
            result.push(interimResult[0]);
            interimResult.splice(0);
        }
        if(interimResult.length > 0)
        {
            for(let key in MORSE_TABLE)
            {
                if(key === interimResult.join(''))
                {
                    result.push(MORSE_TABLE[key]);
                    break;
                }
            }
            interimResult.splice(0);
        }
        for(let j = 9; j >= 0; j--)
        {
            if(arr[i][j] === '1')
            {
                interimResult.unshift('-');
                j--;
            } else {
                if(arr[i][j-1] === '1')
                {
                    interimResult.unshift('.');
                    j--;
                } else {
                   if(arr[i][j] === '*') {
                       interimResult.unshift(' ');
                       break;
                   } else break;
                }
            }
        }
    }
    return result.join('');
}

module.exports = {
    decode
}