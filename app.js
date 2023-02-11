const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = document.querySelector('#phrase ul');
const ResetBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const heart = document.querySelectorAll('.tries img');
const letter = document.querySelectorAll('.letter');

var missed = 0;



ResetBtn.addEventListener('mouseover', (e) =>{
    e.target.style.cursor = "pointer";
    
}); 

/* NEW PHRASE IS ONLY GENERATED WHEN BUTON IS CLICKED */
ResetBtn.addEventListener('click', () => {
    overlay.classList.remove('start');
    overlay.style.display = 'none';
    
});
   
    

const phrases = [
    "macondo",
    "eureca",
    "matilda",
    "brown",
    "jump"
];

function getRandomPhraseAsArray(array) {
    const RandomNum = array[Math.floor(Math.random() * array.length)];
    return RandomNum.split('');
}


function addPhraseToDisplay(array){
    for(let i in array){
        const li = document.createElement('li');
        li.textContent = array[i];
        ul.appendChild(li);
        array[i] !== ' ' 
        ? li.className = 'letter' 
        : li.className = 'space';
       
    } 
} 
    

NewPhrase();
      

let checkLetter = (button) => {
   const letter = document.querySelectorAll('.letter');
    for (let i = 0; i < letter.length; i++){
       if(letter[i].textContent === button){
           letter[i].classList.toggle('show');
           var match = letter[i];
           } else {
               var match = null;
           }
        }  
        return match;
  } 
 
qwerty.addEventListener('click', (e) => {
    let button = e.target;
    if(button.tagName === 'BUTTON') {
        button.className = 'chosen';
        button.setAttribute("disabled", "");
        
    }    
    let letterFound = checkLetter(button.textContent);
    if(letterFound === null) {
        //button.style.backgroundColor = "orange";
        heart[missed].src = 'images/lostHeart.png';
        missed++;
    } 
    checkWin();
});
       

const checkWin = () => {
    
    let letter = document.querySelectorAll('.letter');
    let show = document.querySelectorAll('.show');
    let headline = document.querySelector('.title');
    if (letter.length === show.length) {
        overlay.classList.add('win');
        headline.textContent = 'You win';
        overlay.style.display = 'flex';
        ResetBtn.textContent = "Reset Game";
        reset();
            } else if (missed > 4) {
                overlay.classList.add('lose');
                headline.textContent = 'You lose.';
                overlay.style.display = 'flex';
                ResetBtn.textContent = "Reset Game";
                reset();
            } 
} 
        
     


    function NewPhrase() {
        const phraseArray = getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(phraseArray);
    }

    function ResetPhrase() {
        const resetPhrase = getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(resetPhrase);
    }
    
function reset() {
    missed = 0;
    ul.innerHTML = '';
    ResetPhrase();
    const chosenBtn = document.querySelectorAll('button');
    for (let i = 0; i < chosenBtn.length; i++) {
        //overlay.classList.add('start');
        overlay.style.display = ' ';
        chosenBtn[i].removeAttribute('disabled', '');
        chosenBtn[i].classList.remove('chosen');
    }
    for (let element in heart) {
        heart[element].src = 'images/liveHeart.png';
    }
}


        
        
    
    


    
    
    
