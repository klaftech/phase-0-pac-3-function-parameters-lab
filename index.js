function introduction(name){
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
    //1) takes in two arguments, a name and a language, and language defaults to JavaScript
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
  }