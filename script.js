const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili',
    'caquita'
  ];

let randomWord = document.querySelector("#randomWord");
let timeSpan = document.querySelector("#timeSpan");
let scoreSpan = document.querySelector("#scoreSpan");
let endGameContainer = document.querySelector("#end-game-container")

function randomWordFn(words){
    return words[Math.floor(Math.random()*words.length)]
}

time = 10;
score = 0;

let palabraAleatorea = randomWordFn(words)
function addToDOM(){
   
    randomWord.textContent = palabraAleatorea;
    
}

let input = document.querySelector('input');


addToDOM();


input.addEventListener("input", function(e){
    let palabraIngresada = input.value;
    if (palabraIngresada === palabraAleatorea){
        time += 3;
        
        input.value=""
        palabraAleatorea = randomWordFn(words);
        addToDOM()
        updateScore()
    
    }
})

function actualizarTiempo(){
    time-=1
    timeSpan.textContent=time;
    if (time === 0){
        clearInterval(timeInterval)
        gameOver()
    }
}
let timeInterval = setInterval(actualizarTiempo, 1000);

function updateScore(){
    score +=1;
    scoreSpan.textContent = score;
}


function gameOver(){
    let gameOverTitle = document.createElement("h1");
    let gameOverText = document.createElement("p");
    let goBtn = document.createElement("button");


    goBtn.addEventListener('click', () => location.reload());


    gameOverTitle.textContent = "¡Se acabó tu tiempo!";
    gameOverText.textContent = `Tu puntaje fue ${score}`;
    goBtn.textContent = 'Volvé a empezar'

    endGameContainer.appendChild(gameOverTitle);
    endGameContainer.appendChild(gameOverText);
    endGameContainer.appendChild(goBtn);

    let mainNode = document.querySelector(".main");
    mainNode.remove();

    
}