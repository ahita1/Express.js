const startUpDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
require('dotenv').config();
const config = require('config')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const log = require('./middleware/logger')
const Joi = require('joi')



const app = express()

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);

app.use(express.json())
app.use(express.static('public'))
app.use(helmet())

console.log("Application Name: " + config.get('name'));
console.log("Mail Server : " + config.get('mail.host'));
console.log('Mail Password:', config.get('mail.password'));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('tiny'))
    startUpDebugger('morgan enabled haha!!!');
}

dbDebugger('connected to the database...')
app.use(log)





// reverse a string
let str = "Ahunem sappp ahita progressive "
console.log(str.split('').reverse().join(''));
console.log("-----------------------------------------");



// Checks if the string is the same forwards and backwards.
console.log("-----------------------------------------");
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome(str));
console.log("-----------------------------------------");



// Loops through the string and compares each character with the target character.
console.log("-----------------------------------------");
const characterCount = (str , char) => {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(characterCount(str, 'N'));
console.log("-----------------------------------------");



// Extracts a section of the string.
console.log("-----------------------------------------");
const extract = (str, start, end) => {
    return str.slice(start , end)
}
console.log(extract(str, 0, 6));
console.log("-----------------------------------------");


// Replaces specified characters. Using a regular expression with the 'g' flag replaces all occurrences.
console.log("-----------------------------------------");
const replaceCharacter = (str, target, replacement) => {
    return str.replace(new RegExp(target, 'g'), replacement);
}
console.log(replaceCharacter(str, 'Nigussie', "Fanti"));
console.log("-----------------------------------------");


// All about Convert the case of the string.
console.log("-----------------------------------------");
const tolowerCase = (str) => {
    return  str.toLowerCase() 
}
const toUpperCase = (str) => {
    return  str.toUpperCase() 
}
console.log(tolowerCase(str));
console.log(toUpperCase(str));
console.log("-----------------------------------------");



// Removes whitespace from both ends of the string.
console.log("-----------------------------------------");
let trim_str = " Ahita fani"
const trim = (str) => {
    return str.trim()
}
console.log(trim(trim_str));
console.log(trim_str);
console.log("-----------------------------------------");


// Splits a string into an array of strings.
console.log("-----------------------------------------");
const splitting = (str) => {
    return str.split('')
}
console.log(splitting(trim_str));
console.log("-----------------------------------------");

// let array = ["Ahunem" , "Nigussie" , "Nigussie" , "Ahunem"]
console.log("-----------------------------------------");
const find = (str , str2) => {
    return str.indexOf(str2)
}
console.log(find(str, "Nigussie"));
console.log("-----------------------------------------");




// This function uses a regular expression to validate an email address.
console.log("-----------------------------------------");
const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
console.log(validateEmail("ahitafani833@gmail.com"));
console.log("-----------------------------------------");



// Concept: Unicode and Character Encoding
// The regex matches characters in the emoji Unicode range.
console.log("-----------------------------------------");
const countEmojis = (str) => {
    const emojiRegex = /[\u{1F600}-\u{1F64F}]/gu;
    return (str.match(emojiRegex) || []).length;
}

console.log(countEmojis("😢😃Ahunem 😳😔Nigussie😂"));
console.log("-----------------------------------------");


// 3. Custom String Interpolation
// bzum algebagnem yehegnaw haha
console.log("-----------------------------------------");
const interpolateString = (template, values) => {
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => values[key] || '');
}
console.log(interpolateString("Ahunem Nigussie" , "Ahita Fani"));
console.log("-----------------------------------------");



console.log("Locale-Specific String Comparison-----------------------------------------");
// 4. Locale-Specific String Comparison
const compareStringsLocale = (str1, str2, locale = 'en') => {
    return str1.localeCompare(str2, locale, { sensitivity: 'base' }) === 0;
}
console.log(compareStringsLocale("ahunem nigussie" , "AHUNEM Nigussie"));
console.log("-----------------------------------------");


console.log("5. Sentence to Acronym Conversion-----------------------------------------");
const acronym = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase()).join('')
}
console.log(acronym(str));
console.log("Sentence to Acronym Conversion-----------------------------------------");



console.log("LeetCode for solving the following Problems haha-----------------------------------------");
const leetcode = (nums1, m, nums2, n) => {
    let index1 = m-1
    let index2 = n-1
    let mergeIndex = m + n - 1
    
    while (index2 >= 0) {
        if (index1 >= 0 && nums1[index1] > nums2[index2]) {
            nums1[mergeIndex] = nums1[index1];
            index1--;
        }
        else {
            nums1[mergeIndex] = nums2[index2];
            index2--;
        }
        mergeIndex--;
    }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
leetcode(nums1, 3, nums2, 3)
console.log(nums1);
console.log("LeetCode for solving the following Problems haha-----------------------------------------");




console.log("LeetCode for solving the following Problems haha-----------------------------------------");

function removeElement(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

// Example usage:
let nums = [3, 2, 2, 3];
let val = 3;
let k = removeElement(nums, val);
console.log(k); // Output will be the number of elements not equal to val
console.log(nums.slice(0, k)); // This will show the first k elements that are not equal to val

console.log("LeetCode for solving the following Problems haha-----------------------------------------");




let name = "hi ahunem nigussie ahunem nigussie haha"
let fname = "when i, was a child ; i used to $ play with mud. what haha"
let mod1 = name.split(' ')
let mod2 = Array.from(name)
let mod3 = [...name]
let mod4 = name.includes('ussie')
let mod5 = name.indexOf('gussie')
let mod6 = name.startsWith('Hi')
let mod7 = name.endsWith('Ahunem')
let mod8 = fname.split(/[,;$.]/)
let mod9 = name.split('').reverse().join('')






console.log(`split: ${mod1}` );
console.log(`from: ${mod2}` );
console.log(`spread: ${mod3}` );
console.log(`includes: ${mod4}` );
console.log(`indexOf: ${mod5}` );
console.log(`startsWith: ${mod6}` );
console.log(`endsWith: ${mod7}` );
console.log(`splitWithMultipleOperators: ${mod8}` );
console.log(`reverse: ${mod9}` );
console.log(`repeat: ${'name'.repeat(10)}` );
console.log(`repeat: ${name.substring(1, 4)}`);
console.log(name.charAt(0).toUpperCase() + name.substring(1));
console.log(name.replace(/ahunem/g , "Ahita"));
console.log(name.replace(/nigussie/g , "fani"))


// const count_duplicate_characters = (str) =>  {
//     var result = {}

//     var arr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g)

//     if (arr !== null) {
//         arr.forEach(element => {
//             result[element[0]] = element.length
//         });
//     }
//     console.log(arr);
//     return result
// }
// console.log(count_duplicate_characters("when i was a child i used to play with mud but ma mother would never been allowed for me to do so such like that things owkay haha"));









const countString = (str) => {
    let result = {}
    let arr = str.toLowerCase().split('').sort().join('').match(/(.)\1+/g)  
    if (arr !== null) {
        arr.forEach(element => {
            result[element[0]] = element.length
        });
    }
    console.log(arr);
    return result
}
const result = countString("this is a test from ahitta haha")
console.log(result);







// finding the first non repeated character
const EXTENDED_ASCII_CODES = 256
const repeated = "ahgdfhgfaklop"

const first_non_repeated_character = function(str) {

    var flags = []
    for (let i = 0; i < EXTENDED_ASCII_CODES; i++) {
        flags.push(-1)
    }

    for (let j = 0; j< str.length; j++) {

        var ch = str.charCodeAt(j)
        if (flags[ch] == -1) {
            flags[ch] = j
        } else {
            flags[ch] = -2
        }
    }

    var position = Number.MAX_SAFE_INTEGER

    for (let k = 0; k < EXTENDED_ASCII_CODES; k++) {
        if (flags[k] > 0) {
            position = Math.min(position, flags[k])
        }
    }

    return str[position]
}

console.log(first_non_repeated_character(repeated));




// reversing letters and words haha
var test_string = "emocleW ot SJ ni nialP hsilgnE"
const reverse = (str) => {
    return str.split(' ').map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}

console.log(reverse(test_string));





// generating all permutations haha
let per = 'ABC'
const permute_and_print =  (str) => {
    permute("", str);
}
const permute = function (prefix, str) {
    var n = str.length
    if (n == 0) {
        console.log(prefix + "")
    }
    if (n != 0) {
        for (let i = 0; i < n; i++) {
            permute(prefix + str.charAt(i),
                str.substring(i + 1, n) + str.substring(0, i))
        }
    }
}
console.log(permute_and_print(per));


console.log('Palindrome haha----------------------------------');
let names = "coc"
let names2 = "cocd"
console.log(isPalindrome(names));

const palind = (name) => {
    let reversed = name.split('').reverse().join('')
    return reversed == names
}
console.log(palind(names2));
console.log('Palindrome haha----------------------------------');




console.log('Sorting array of string with length haha----------------------------------');
// sorting an array of strings by length haha
let sorting = ['Ahunem' ,'nigussie', 'fanti' ,'sol']
const sort = (str) => {
    return str.sort((a , b) => {
        return a.length-b.length
    })
}
console.log(sort(sorting));
let substr = "Ahunem"
console.log(substr.includes('nem'));
console.log('Sorting array of string with length haha----------------------------------');


console.log('checking two strings are anagram of each other----------------------------------');
let str1  = 'abcd'
let str2  = 'dcba'
const anagram = (str1, str2) => {
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}
console.log(anagram(str1, str2));






var a = "abcd"
var b = "dabc"

const are_anagram = function (str1, str2) {

    const NO_OF_CHARS = 256

    var count = [0]
    var i = 0

    for (i = 0; str1[i] && str2[i]; i++) {
        count[str1[i]]++
        count[str2[i]]--
    }

    if (str1[i] || str2[i]) {
        return false
    }

    for (i = 0; i < NO_OF_CHARS; i++) {
        if (count[i])
            return false
    }
    return true

}
console.log(are_anagram(a,b));
console.log('checking two strings are anagram of each other----------------------------------');


// finding the first occurence non-repeated  character in a string
console.log('########################################');
const strf = 'loveleetcode'
const firstChar = (str) => {
    const count = {}
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    console.log(count);
    for (let char of str) {
        if (count[char] === 1) {
            return char
        }
    }
}
console.log(firstChar(strf));
console.log('########################################');
console.log('########################################');
let comp = 'aabcccccaaa'
const compress = (str) => {
    let compressed = ''
    let count = 0
    for (i = 0; i < str.length; i++){
        count++;
        if (i + 1 >= str.length || str[i] !== str[i + 1]) {
            compressed += str[i] + count
            count = 0
        }
    }
    return compressed.length < str.length ? compressed : str
}
console.log(compress(comp));
console.log('########################################');



console.log('urlify########################################');
const urlify = (str) => {
    return str.trim().replace(/\s/g, "%20")
}
console.log(urlify("Mr John Smith    "));
console.log('urlify########################################');









































// const port = 3000
const courses = [
    { id: 1, name: 'C++' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Python' },
]
app.get('/', (req, res) => {
    res.send("hello Ahita, how are you haha, don't worry everything is gonna be alright owkay haha")
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.post('/api/courses', (req, res) => {
    const { error } = validate(req.body)
    if (error)
        return res.status(400).send(error.details[0].message);
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query)
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(u => u.id === parseInt(req.params.id))
    if (!course)
        return res.status(404).send("a course with this id was not found haha")
    res.send(course)
})

app.put('/api/courses/:id', (req, res) => {

    const course = courses.find(u => u.id === parseInt(req.params.id))
    if (!course)
        return res.status(404).send("a course with the given is was not found!!!")

    const { error } = validate(req.body)
    if (error)
        return res.status(400).send(error.details[0].message)
    course.name = req.body.name
    res.send(course)
})


app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find((u) => u.id === parseInt(req.params.id))
    if (!course)
        return res.status(404).send('A Course With The Given Id Was Not Found haha!!!')
    const index = courses.indexOf(course)
    courses.splice(index, 1)

    res.send(course)

})

const validate = (course) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    return schema.validate(course)
}
const port  = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server is listening on port ${port}...`);
})