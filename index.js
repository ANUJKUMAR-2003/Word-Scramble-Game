const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

let play = false;
let newWords = "";
let randWords = "";

let sWords = ['pyhton', 'javascript', 'java', 'HTML', 'reactjs', 'nodejs', 'expressjs', 'computer', 'algorithm', 'binary', 'netwotks', 'communication',
    'github', 'php', 'mysql', 'angular', 'androis', 'swift', 'kotlin'];

const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length);
    let newTempSwords = sWords[ranNum];
    return newTempSwords;
}

const scrambleWords = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        console.log(i);
        console.log(j);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = 'Guess the word : ' + randWords;
    }
    else {
        let tempWord = guess.value;
        if (tempWord == newWords) {
            play = false;
            msg.innerHTML = 'Awesome! You guessed it right.';
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        }
        else {
            msg.innerHTML = 'Sorry! You are wrong.' + '<br>' + 'Try again : ' + randWords;
            guess.value = "";

        }
    }
})
