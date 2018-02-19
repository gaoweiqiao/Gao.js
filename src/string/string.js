/**
 * Created by patrick on 2018/2/18.
 */
class String{
    static trim(string,chars=' '){
        let charList = chars.split("");
        //新 实现
        let sliceStart = 0;
        let sliceEnd = string.length - 1;
        let trimStarting = true;
        let trimEnding = true;
        while (trimStarting || trimEnding ){
            if(trimStarting){
                let startChar = string[sliceStart];
                trimStarting = charList.indexOf(startChar) > -1;
                if(trimStarting){
                    sliceStart++;
                }
            }
            if(trimEnding){
                let endChar = string[sliceEnd];
                trimEnding = charList.indexOf(endChar) > -1;
                if(trimEnding){
                    sliceEnd--;
                }
            }
            if(sliceStart >= sliceEnd){
                break;
            }

        }
        return string.slice(sliceStart,sliceEnd+1);

    }
    static camelCasify(word){
        var regex = /[a-zA-Z0-9\$]+/g;
        var wordList = [];
        var result;
        while (result = regex.exec(word)){
            let wordFragment = result[0];
            let firstLetter = wordFragment[0];
            if(0 === wordList.length){
                wordList.push(firstLetter.toLowerCase());
            }else{
                wordList.push(firstLetter.toUpperCase());
            }
            wordList.push(wordFragment.slice(1));
        }
        return wordList.join('');
    }
    static kebabCasify(word){
    var regex = /[a-zA-Z0-9\$]+/g;
    var camelRegex = /[A-Z][a-z0-9\$]*/g;
    var wordList = [];
    var result;
    while (result = regex.exec(word)){
        (function(){
            var wordFragment = result[0];
            //
            var camelResult = camelRegex.exec(wordFragment);
            if(camelResult){
                if(camelResult.index > 0){
                    wordList.push(wordFragment.slice(0,camelResult.index).toLowerCase());
                }
                do{
                    wordList.push(camelResult[0].toLowerCase());
                }
                while (camelResult = camelRegex.exec(wordFragment));
            }else{
                wordList.push(wordFragment);
            }
        }());
    }
    return wordList.join('-');
}

    static snackCasify(word){
    var regex = /[a-zA-Z0-9\$]+/g;
    var snakeRegex = /[A-Z][a-z0-9\$]*/g;
    var wordList = [];
    var result;
    while (result = regex.exec(word)){
        (function(){
            var wordFragment = result[0];
            //
            var snakeResult = snakeRegex.exec(wordFragment);
            if(snakeResult){
                if(snakeResult.index > 0){
                    wordList.push(wordFragment.slice(0,snakeResult.index).toLowerCase());
                }
                do{
                    wordList.push(snakeResult[0].toLowerCase());
                }
                while (snakeResult = snakeRegex.exec(wordFragment));
            }else{
                wordList.push(wordFragment);
            }

        }());
    }
    return wordList.join('_');
}
}
export default String;