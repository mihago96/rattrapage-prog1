export function  removeWords(original, wordsToRemove){
let newSentence =[];
    for(let el of wordsToRemove){
       for(let e of original){
        if(e!==el){
            newSentence.push(e);
        }
       }
    }

    return newSentence.join('').toString();
}

console.log(removeWords("Hello, this is a test", ["this","a"]));
