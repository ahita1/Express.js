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


// Splits a string into an array of characters haha.
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
    let arr = str.toLowerCase().split('').sort().join('').match(/(. )\1+/g)  
    if (arr !== null) {
        arr.forEach(element => {
            result[element[0]] = element.length
        });
    }
    // console.log(arr);
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




console.log('Permutations haha########################################');
const permutes = (str, l, r) => {
    if (l == r) {
        console.log(str.join(''));
    } else {
        for (let i = l; i <= r; i++) {
            [str[l], str[i]] = [str[i], str[l]];
            permutes(str, l + 1, r);
            [str[l], str[i]] = [str[i], str[l]];
        }
    }
}
const  stringPermutations = (str) => {
    let arr = str.split('');
    permutes(arr, 0, arr.length - 1);
}

stringPermutations("ABC")
console.log('Permutations haha########################################');






console.log('Balanced haha########################################');
const isBalanced = (str) => {
    let stack = [];
    let map = { '(': ')', '{': '}', '[': ']' }
    for (let char of str) {
        if (map[char]) {
            stack.push(map[char])
        }
        else {
            if (char !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
let brackets = "{[()]}"
console.log(isBalanced(brackets));
console.log('Balanced haha########################################');


console.log('substring haha########################################');
let mainString = "Ahunem"
let substrings = "nem"
const checkSubstring = (a, b) => {
    return mainString.indexOf(substrings) !== -1;
}
console.log(checkSubstring(mainString , substrings));
console.log('substring haha########################################');




console.log('longest Palindrome  haha########################################');
function longestPalindromicSubstring(str) {
    let longest = '';
    for (let i = 0; i < str.length; i++) { //i = 0 , 
        // Check for odd-length palindromes
        let oddPalindrome = expandFromCenter(str, i, i); //str , 2 , 2  --- b , bab , aba
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }

        // Check for even-length palindromes
        let evenPalindrome = expandFromCenter(str, i, i + 1); //left=1 , right=2
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
}
function expandFromCenter(str, left, right) { //str , 2 , 2 , str = 'babad' str.length = 5
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left--; //0
        right++; //4
    }
    return str.slice(left + 1, right);
}
console.log(longestPalindromicSubstring('babad'));
console.log('longest Palindrome haha########################################');




console.log('atoi haha########################################');
const atoi = (str) => {
    let trimmed = str.trim().replace(/[^+\-\d]/g, '')
    return parseInt(trimmed) +1
}
const atoi_str = "   -hello36453654h"
console.log(atoi(atoi_str));
console.log('atoi haha########################################');
let sentence = "when i was a child i used to look on with those dangerous peoples haha"
console.log(sentence.includes('look on', 30)); // false
console.log(sentence.match("was"));

let evals = '2+45+7'
console.log(eval(evals));
console.log(evals.search('9'));
console.log(evals.indexOf('9'));
console.log(evals.includes('4'));



let separat = 'Ahita l0.9ikes Inabcabcd787ex of the indirect 7678fillbingsaaaaaa'
console.log(separat.split('i').join(''))
console.log(separat.match(/[ahi]/g ).join(''));
console.log(separat.match(/[ahi]/g).join(''));
console.log(separat.match(/[a-z]/g).join(''));
console.log(separat.match(/[A-Z]/g).join(''));
console.log(separat.match(/[0-9/]/g).join(''));
console.log(separat.match(/[abc]/g).join(''));
console.log(separat.match(/abc/g).join(''));
console.log(separat.match(/\d/g).join(''));
console.log(separat.match(/\D/g).join(''));
console.log(separat.match(/\w/g).join(''));
console.log(separat.match(/\s/g).join(''));
console.log(separat.match(/abc/g).join(''));
console.log(separat.match(/[ab]/g).join(''));


console.log(parseInt("  -42".trim().match(/[0-9\-]/g).join('')));
console.log(parseInt("42".trim().match(/[0-9\-]/g).join('')));
console.log(parseInt("4193 with words".trim().match(/[0-9\-]/g).join('')));



console.log('##################################################');
console.log('anagram checking haha');
let anag1 = 'tea'
let anag2 = 'ate'
const anagrams = (str1, str2) => {
    const anag = (str) => {
        return str.replace(/\w/g, '').toLowerCase().split().sort().join('')
    }
    return anag(str1) === anag(str2)
}
console.log(anagrams(anag1, anag2));
console.log('##################################################');

console.log('##################################################');
let lol = "characters haha"
let lolss = lol.trim().replace(/\s/g , '')
const charCount = (str) => {
    let counts = {}
    for (let char of str) {
        counts[char] = counts[char] ? counts[char] + 1 : 1;
        // counts[char] = (counts[char] || 0) + 1;

    }
    return counts
}
console.log(charCount(lolss));
console.log('##################################################');



console.log('Title haha##################################################');
console.log('conversting a string to a title haha');
let format = 'the hyeNa fast fast eat the ox antena haha'
const formats = (str) => {
    return str.toLowerCase().split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
}
console.log(formats(format));
console.log('##################################################');




console.log('##################################################');
// replacing a substring globally in a case insensetive manner globally
let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.replace(/ain/gi , 'ooo'));
console.log('##################################################');










let cases = 'Ahunem Nigussie.fanti'
const toCamelCase = (str) => {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
const toSnakeCase = (str) => {
    return str
        .toLowerCase()
        .replace(/\W/g, '_');
}
const encode = (str) => {
    return btoa(str)
}
const decode = (str) => {
    return atob(str)
}


const characterFrequency = (str) => {
    return str.replace(/\W/g , '').split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    },{});
}




const countVowels = (str) => {
    return str.split('').filter(char => 'aeiou'.includes(char.toLowerCase())).length;
}

function UpperCase(str) {
    return str.split('').map(char => char.toUpperCase()).join('');
}


function removeCharacter(str, charToRemove) {
    return str.split('').filter(char => char !== charToRemove).join('');
}
const resuEncode = encode(cases)
console.log(toCamelCase(str));
console.log(toSnakeCase(cases));
console.log(resuEncode);
console.log(decode(resuEncode));
console.log(characterFrequency(cases));
console.log(countVowels(cases));
console.log(UpperCase(cases));
console.log(removeCharacter(cases, 'a'));
console.log(cases.replace(/[a]/g , ''));







console.log('URL Slug Creation--------------------------------------------');
// 1. URL Slug Creation
function createSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '') // Remove invalid chars
        .replace(/\s+/g, '-')        // Replace spaces with -
        .replace(/-+/g, '-');        // Replace multiple - with single -
}
// 2. URL Slug Creation
let slug = 'My  Ne+w Bl-og Post!'
let editSlug = slug.split(' ').map(item => item.replace(/[\W]/g , '')).join(' ')
console.log(editSlug.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-'));
console.log(createSlug(slug));
console.log('URL Slug Creation--------------------------------------------');



function parseQueryString(queryString) {
    return Object.fromEntries(new URLSearchParams(queryString));
}
let query = '?name=ahita&age=23&sex=male'
console.log(parseQueryString(query));

let first_name = "Ahunem"
let time = new Date().toISOString()
console.log(`Hey ${first_name}: the time is now: [${time}]`);



console.log('verify email haha---------------------------------');
let email = 'this is Ahunem Nigussie email: ahitafani833@gmail.com who sends email to his friend andualem with email address: andi@gmail.com who is the best pure man from which ahita have ever seen but soll is the most true and loveable person from which i have ever seen haha... i used to contact him with email address of soll_mirtas@gmail.com'
console.log(email.match(/[\w.-]+@[\w.-]+\.\w+/g)) || [];
console.log('verify email haha---------------------------------');





console.log('Ceasar Cipher haha---------------------------------');
function caesarCipher(str, shift) {
    return str.replace(/[a-z]/gi, (char) => 
        String.fromCharCode(char.charCodeAt(0) + (char.toLowerCase() <= 'z' ? shift : -shift))
    );
}
console.log(caesarCipher('Ahunem' , 5));
console.log('Ceasar Cipher  haha---------------------------------');



console.log('checking for Alphanumeric characters with the test() mothod  haha---------------------------------');
const isAlphaNumeric = (str) => {
    // return /^[a-z0-9]+$/i.test(str)
    return /^[a-z0-9]+$/i.test(str)
}
let input = '78789w7e.67jsdhgdhfgdf'
console.log(isAlphaNumeric(input));
console.log('Alphanumeric haha---------------------------------');





const summarizePrice = (str) => {
    return str.split('\n').map(word => parseFloat(word.split(',')[1])).reduce((sum , elem) => sum + elem , 0) 
}
let data = "Product,34\nWidget,19.99\nGadget,25.50\nDoodad,5.00";
console.log(summarizePrice(data));





//All about formatting APIResponse haha
let response = '{"name":"John","age":30,"address":"123 Main St" , "binary" : "001011"}';
const formatJson = (jsonString) => {
    const jsonObject = JSON.parse(jsonString)
    let sortedKeys = Object.keys(jsonObject).sort()
    let sortedObject = {}
    for (let key of sortedKeys) {
        sortedObject[key] = jsonObject[key]
    }
    return JSON.stringify(sortedObject)
}
console.log(formatJson(response));




































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