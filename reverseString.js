// "the quick brown fox jumped over the lazy dog"
// function reverse(str) -> "dog lazy the over ... quick this"
// function reverse(str) -> "god yzal ..."


reverseString = (str) => {
    let array = [];
    let stringArray = str.split(" ");
    // console.log(stringArray);
    for (let i = stringArray.length - 1; i >= 0; i--) {
        array.push(stringArray[i].split("").reverse().join(""));
    }
    return array.join(" ");
}


reverseString("this quick brown fox jumped over the lazy dog");