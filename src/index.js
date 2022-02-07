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
    // write your solution here
    var words = expr.split("**********");
    var wsplitted = [];
    var wtrimmed = [];
    var wdecoded = [];
    var wsubstd = [];
    words.forEach(function(el,ind,arr){
        var word = [];
        for(var i=0;i<el.length;i=i+10){
            word.push(el.slice(i,i+10));
        }
        wsplitted.push(word);
    });
    wsplitted.forEach(function(el,ind,arr){
        var word = [];
        el.forEach(function(elem, indx,array){
            word.push(elem.replace(/0{2,}/, ""));
        });
        wtrimmed.push(word);
    });
    wtrimmed.forEach(function(el,ind,arr){
        var word = [];
        el.forEach(function(elem,indx,array){
            word.push(elem.replace(/10/g, ".").replace(/11/g, "-"));
        });
        wsubstd.push(word);
    });
    wsubstd.forEach(function(el,ind,arr){
        var word = [];
        el.forEach(function(elem,indx,array){
            for(var key in MORSE_TABLE){
                if(elem == key){
                    word.push(MORSE_TABLE[key]);
                    break;
                }
            }
        });
        wdecoded.push(word);
    });
    var wdjoined = wdecoded.map(function(el,ind,arr){
        return el.join("");
    });
    return wdjoined.join(" ");
}

module.exports = {
    decode
}