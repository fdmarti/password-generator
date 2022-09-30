const arrSymbols = ('~!@#$%^&*()_-+={[}]|<,>.?/').split('');
const arrNumbers = [0,1,2,3,4,5,6,7,8,9];
const letters = ('abcdefghijklmnopqrstuvwxyz').split('');

const generatePassword = (params) => {
    let newPassword = [];
    const { range,numbers,symbols } = params

    let arrayForPassword = letters;

    if ( numbers ) arrayForPassword = arrayForPassword.concat(arrNumbers)
    if ( symbols ) arrayForPassword = arrayForPassword.concat(arrSymbols)

    for( let i = 0; i <= range ; i++){
        let randomNumber = getRandomNumber(arrayForPassword.length);

        if ( typeof arrayForPassword[randomNumber] === 'string' ) {
            const resultUpperLower = UpperOrLower(arrayForPassword[randomNumber])
            newPassword.push(resultUpperLower)
        }else{
            newPassword.push(arrayForPassword[randomNumber])
        }
    }

    return newPassword.join('')
}

const getRandomNumber = (limit) => Math.floor(Math.random()*limit);

const UpperOrLower = (letter) => {
    if ( Math.floor(Math.random()*2)) return letter.toUpperCase()
    else return letter.toLowerCase()
}

export default generatePassword