function sing() {
    let letitbe1 ='';
    let letitbe2 ='';

    for (let i =0; i<4; i++) {
        letitbe1 += "let it be, ";
    }
    for (let i =0; i<5; i++) {
        letitbe2 += "let it be, ";
    }
    let frase = letitbe1 + "there will be an answer, " + letitbe2 + "whisper words of wisdom, let it be";
    return frase;
}

//Your code above ^^^

console.log(sing());