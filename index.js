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



var test_string = "emocleW ot SJ ni nialP hsilgnE"
const reverse = (test) => {
    const reversed =  test_string.split(' ').map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
    return reversed
}

console.log(reverse(test_string));





























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