// Write a function

// tripledouble(num1,num2)
// which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.
// For example:
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

function tripledouble(num1, num2) {
    num1split = num1.slice(' ');
    num2split = num2.slice(' ');

    for (num in num1split) {
        if ((num1split[i] === num1split[i + 1]) && (num1split[i + 1] === num1split[i + 2]))
            if (num2split[i] == num2split[i + 1]);
        return 1;
    } return 0;
}