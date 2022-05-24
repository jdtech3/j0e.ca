// Settings
const target = document.getElementById('whoami');
const typeDelay = 0.1;      // speeds in seconds
const chillDelay = 2;
const before = 'I am '
const me = [
    'a Student',
    '(hopefully) an Electrical Engineer soon™',
    'an Archivist',
    'a Tinkerer',
    'a Data Hoarder',
    'a Programmer',
    'a Sysadmin',
    'a D&D Player',
    'a Canadian',
]

// Turn into array of char arrays
let me_expanded = []
for (const elem of me) {
    me_expanded.push(elem.split(''));
}

// Looping typing animation
let currentLine = 0;
let currentChars = me_expanded[0].filter(() => true);   // clone array so we don't just have a reference
function type() {
    if (currentChars.length !== 0) {
        target.innerText += currentChars.shift();

        setTimeout(type, typeDelay * 1000);
    }
    else {
        currentLine = (currentLine + 1 < me_expanded.length) ? currentLine + 1 : 0;
        currentChars = me_expanded[currentLine].filter(() => true);     // clone array like above

        setTimeout(function() {target.innerText = before}, chillDelay * 1000);
        setTimeout(type, chillDelay * 1000);
    }
}

// Start!
target.innerText = before;
type();