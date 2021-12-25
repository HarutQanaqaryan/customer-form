const patternLetters = /^[а-яА-Я ]+$/;


export const russianLetters = (value) => patternLetters.test(value) ||  value === ""
export const checkFirstNumberPhone = (value) => value[0] === "7"
export const checkLengthPhone = (value) => value.length === 11;