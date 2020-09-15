export const randomize = (length) => {
    const item = Math.floor(Math.random() * length);
    return item;
}

export const shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array;
}

export const wordBuilder = (word, quantity) => {
    let newWord = word;
    if (quantity > 1 && word !== 'lápis') {
        switch (word) {
            case 'flor':
                return newWord = word.concat('es');
            default: 
                return newWord = word.concat('s');
        }    
    } else {
        return newWord;
    }   
}