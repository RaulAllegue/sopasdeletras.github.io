

window.onload = function(){
//#region tds
const td_1x1 = document.getElementById('1-1');
const td_1x2 = document.getElementById('1-2');
const td_1x3 = document.getElementById('1-3');
const td_1x4 = document.getElementById('1-4');
const td_1x5 = document.getElementById('1-5');
const td_1x6 = document.getElementById('1-6');
const td_1x7 = document.getElementById('1-7');
const td_1x8 = document.getElementById('1-8');
const td_2x1 = document.getElementById('2-1');
const td_2x2 = document.getElementById('2-2');
const td_2x3 = document.getElementById('2-3');
const td_2x4 = document.getElementById('2-4');
const td_2x5 = document.getElementById('2-5');
const td_2x6 = document.getElementById('2-6');
const td_2x7 = document.getElementById('2-7');
const td_2x8 = document.getElementById('2-8');
const td_3x1 = document.getElementById('3-1');
const td_3x2 = document.getElementById('3-2');
const td_3x3 = document.getElementById('3-3');
const td_3x4 = document.getElementById('3-4');
const td_3x5 = document.getElementById('3-5');
const td_3x6 = document.getElementById('3-6');
const td_3x7 = document.getElementById('3-7');
const td_3x8 = document.getElementById('3-8');
const td_4x1 = document.getElementById('4-1');
const td_4x2 = document.getElementById('4-2');
const td_4x3 = document.getElementById('4-3');
const td_4x4 = document.getElementById('4-4');
const td_4x5 = document.getElementById('4-5');
const td_4x6 = document.getElementById('4-6');
const td_4x7 = document.getElementById('4-7');
const td_4x8 = document.getElementById('4-8');
const td_5x1 = document.getElementById('5-1');
const td_5x2 = document.getElementById('5-2');
const td_5x3 = document.getElementById('5-3');
const td_5x4 = document.getElementById('5-4');
const td_5x5 = document.getElementById('5-5');
const td_5x6 = document.getElementById('5-6');
const td_5x7 = document.getElementById('5-7');
const td_5x8 = document.getElementById('5-8');
const td_6x1 = document.getElementById('6-1');
const td_6x2 = document.getElementById('6-2');
const td_6x3 = document.getElementById('6-3');
const td_6x4 = document.getElementById('6-4');
const td_6x5 = document.getElementById('6-5');
const td_6x6 = document.getElementById('6-6');
const td_6x7 = document.getElementById('6-7');
const td_6x8 = document.getElementById('6-8');
const td_7x1 = document.getElementById('7-1');
const td_7x2 = document.getElementById('7-2');
const td_7x3 = document.getElementById('7-3');
const td_7x4 = document.getElementById('7-4');
const td_7x5 = document.getElementById('7-5');
const td_7x6 = document.getElementById('7-6');
const td_7x7 = document.getElementById('7-7');
const td_7x8 = document.getElementById('7-8');
const td_8x1 = document.getElementById('8-1');
const td_8x2 = document.getElementById('8-2');
const td_8x3 = document.getElementById('8-3');
const td_8x4 = document.getElementById('8-4');
const td_8x5 = document.getElementById('8-5');
const td_8x6 = document.getElementById('8-6');
const td_8x7 = document.getElementById('8-7');
const td_8x8 = document.getElementById('8-8');
//#endregion
const WordToFind = document.getElementById('wordToFind');
const ttl = document.getElementById('title');
const Consejos = ['CONSEJO: Pulse en la palabra para resetear la busqueda', 'CONSEJO: Al acertar una palabra, ganas 5 segundos', 'CONSEJO: Al fallar una palabra, pierdes 3 segundos', 'CONSEJO: Las palabras deben ser pulsadas en el orden correcto', 'CONSEJO: Acertar una palabra suma 100 puntos', 'CONSEJO: Fallar una palabra resta 5 puntos', 'CONSEJO: Resetear una palabra no resta puntos ni tiempo'];

function Rnd(min, max){ return Math.floor(Math.random()*(max-min++))+min--; }

    setTimeout(()=>{
        if(started == false){
            ttl.textContent = Consejos[Math.floor(Math.random()*Consejos.length)];
        }
    }, 3000);

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y", "Z"];
const wordsDict = ['CABER', 'LATIR', 'SEPIA', 'COFIA', 'PARTE', 'ACABA', 'AGITA', 'AFILO', 'AGRIO', 'BIDON', 'BICIS', 'BOCAS', 'CAMPO', 'CAMAS', 'CANTA', 'CANSO', 'CHICO', 'CISNE', 'CREER', 'CRUCE', 'DICTA', 'DEUDA', 'DIANA', 'DUROS', 'EDITA', 'EBRIO', 'ESPIA', 'FALDA', 'FARDO', 'FRESA', 'GALLO', 'GANAS', 'GRABA', 'FUNDA', 'HIERE', 'HILAR', 'HOYOS', 'HUECO', 'TIRAR', 'INFLA', 'JABON', 'JALEA', 'ANTES', 'LICOR', 'MATAR', 'MUECA', 'NADAR', 'NOVIA', 'NIETA', 'OBESO', 'OSTRA', 'OVALO', 'PARAR', 'PERLA', 'PESCA', 'RABIA', 'RECTO', 'RENTA', 'SABER', 'SALSA', 'SIENA', 'SOLAS', 'TORTA', 'TAPAS', 'TEMOR', 'UTERO', 'USTED', 'PELOS', 'MENOS'];
const directions = ['up', 'down', 'left', 'right', 'di-up-right', 'di-up-left', 'di-down-right', 'di-down-left'];
const Coords = 
[[td_1x1, td_1x2, td_1x3, td_1x4, td_1x5, td_1x6, td_1x7, td_1x8],
[td_2x1, td_2x2, td_2x3, td_2x4, td_2x5, td_2x6, td_2x7, td_2x8],
[td_3x1, td_3x2, td_3x3, td_3x4, td_3x5, td_3x6, td_3x7, td_3x8],
[td_4x1, td_4x2, td_4x3, td_4x4, td_4x5, td_4x6, td_4x7, td_4x8],
[td_5x1, td_5x2, td_5x3, td_5x4, td_5x5, td_5x6, td_5x7, td_5x8],
[td_6x1, td_6x2, td_6x3, td_6x4, td_6x5, td_6x6, td_6x7, td_6x8],
[td_7x1, td_7x2, td_7x3, td_7x4, td_7x5, td_7x6, td_7x7, td_7x8],
[td_8x1, td_8x2, td_8x3, td_8x4, td_8x5, td_8x6, td_8x7, td_8x8]];
const Felicitaciones = ['Bravo!', 'Wow!', 'Increible!', 'Sigue asi!', 'Muy bien!', 'Epico!', 'Genial!', 'Super!'];
let SearchedWord = '';
let Acabado = false;
let score = 0;
let started = false;
let timeLeft = 60;
let AllTds = [];
let Valoracion = 'F';
let Puntuaciones = [];


function Start(){

    if (started == false){
        timeLeft = 60;
        ttl.textContent = 60;
        CrearSopa();
        started = !started;
        setInterval(() =>{
            if(timeLeft < 61){ttl.textContent = timeLeft;}
            else if(timeLeft < 64)ttl.textContent = timeLeft - 60;
            if (timeLeft > 0){
                timeLeft--;  
            }
            else {
                //#region Asignar Rango
                if (score >= 300 && score < 500) Valoracion = 'D';
                if (score >= 500 && score < 750) Valoracion = 'C';
                if (score >= 750 && score < 1000) Valoracion = 'B';
                if (score >= 1000 && score < 1500) Valoracion = 'A';
                if (score >= 1500) Valoracion = 'S';
                //#endregion
                ttl.textContent = 'Rango: ' + Valoracion;
                if (timeLeft > 64){
                    ttl.textContent = 'Rango: ' + Valoracion;
                }
                timeLeft=67;
                setTimeout(function(){
                    CrearSopa();
                }, 8000);
                word = '';
                WordToFind.textContent = 'Puntuación: ' + score;
                Puntuaciones.push(score);
                score = 0;
            }
            if (timeLeft <= 10){
                document.getElementById('title').style.color = 'red';
            }
            else document.getElementById('title').style.color = 'black';
        }, 1000);
    }
}
if (started == false)document.addEventListener('click', ()=>{Start();});

Coords.forEach((Row) => {
    Row.forEach((td)=>{
            td.addEventListener('click', function(){
                if(timeLeft < 60 && Acabado == false){
                    td.style.backgroundColor = 'green';
                    td.style.transition = '0.25s';
                    if (AllTds.includes(td)){ 
                        SearchedWord += td.textContent;
                    }
                    else { 
                        td.style.backgroundColor = 'red';
                        td.style.transition = '0.25s'; 
                        score -= 50;
                        WordToFind.textContent = word;
                        SearchedWord = ''; 
                        timeLeft -= 5;
                    } 
                    if (SearchedWord == word){
                        CrearSopa();
                        SearchedWord = '';
                        score += 100;
                        ttl.textContent = Felicitaciones[Math.floor(Math.random()*Felicitaciones.length)];
                        timeLeft += 5;
                    }
                    if(SearchedWord.length != 0) WordToFind.textContent = SearchedWord;
                    if (SearchedWord.length > 5) {WordToFind.textContent = word; score -= 50; SearchedWord = '';}
                }

                });
                    
            td.onmouseenter = function(){
            td.style.backgroundColor = 'grey';
            td.style.transition = '0.15s';
            td.onmouseleave = ()=>{
                td.style.backgroundColor = 'white';
                td.style.transition = '0.15s';
            }
            }
        });
    });


// En sopa
let word = '';
let wordDir = directions[Math.floor(Math.random()*directions.length)];
let initPos = [0, 0];
let CompletePos = [[], []];

function CrearSopa(){
    SearchedWord='';
    wordDir = directions[Math.floor(Math.random()*directions.length)];
    word = wordsDict[Math.floor(Math.random()*wordsDict.length)];

    WordToFind.textContent = word;

    // #region Asign pos
    if (wordDir=='up'){ initPos[0]=Rnd(-1,7); initPos[1]=Rnd(3,7)}
    if (wordDir=='down'){ initPos[0]=Rnd(-1,7); initPos[1]=Rnd(-1,3)}
    if (wordDir=='right'){ initPos[0]=Rnd(-1,3); initPos[1]=Rnd(-1,7)}
    if (wordDir=='left'){ initPos[0]=Rnd(3,7); initPos[1]=Rnd(-1,7)}
    if (wordDir=='di-up-right'){ initPos[0]=Rnd(-1,3); initPos[1]=Rnd(3,7)}
    if (wordDir=='di-up-left'){ initPos[0]=Rnd(3,7); initPos[1]=Rnd(3,7)}
    if (wordDir=='di-down-right'){ initPos[0]=Rnd(-1,3); initPos[1]=Rnd(-1,3)}
    if (wordDir=='di-down-left'){ initPos[0]=Rnd(3,7); initPos[1]=Rnd(-1,3)}

    // #endregion

    // #region Asignar una letra a cada casilla en el tablero
    for (let i=0; i<Coords.length; i++){
        Coords[0][i].textContent = alphabet[Math.floor(Math.random()*alphabet.length)];
        Coords[1][i].textContent = alphabet[Math.floor(Math.random()*alphabet.length)];
        Coords[2][i].textContent = alphabet[Math.floor(Math.random()*alphabet.length)];
        Coords[3][i].textContent = alphabet[Math.floor(Math.random()*alphabet.length)];
        Coords[4][i].textContent = alphabet[Math.floor(Math.random()*alphabet.length)];
        Coords[5][i].textContent = alphabet[Math.floor(Math.random()*alphabet.length)];
        Coords[6][i].textContent = alphabet[Math.floor(Math.random()*alphabet.length)];
        Coords[7][i].textContent = alphabet[Math.floor(Math.random()*alphabet.length)];
    }
    //#endregion
    
    // #region Generar array de posiciones al completo
    for (let i=0; i<5; i++){
        if (wordDir=='up'){CompletePos[0][i]=initPos[0]; CompletePos[1][i]=initPos[1]--;}
        if (wordDir=='down'){CompletePos[0][i]=initPos[0]; CompletePos[1][i]=initPos[1]++;}
        if (wordDir=='right'){CompletePos[0][i]=initPos[0]++; CompletePos[1][i]=initPos[1];}
        if (wordDir=='left'){CompletePos[0][i]=initPos[0]--; CompletePos[1][i]=initPos[1];}
        if (wordDir=='di-up-right'){CompletePos[0][i]=initPos[0]++; CompletePos[1][i]=initPos[1]--;}
        if (wordDir=='di-up-left'){CompletePos[0][i]=initPos[0]--; CompletePos[1][i]=initPos[1]--;}
        if (wordDir=='di-down-right'){CompletePos[0][i]=initPos[0]++; CompletePos[1][i]=initPos[1]++;}
        if (wordDir=='di-down-left'){CompletePos[0][i]=initPos[0]--; CompletePos[1][i]=initPos[1]++;}
    }
    //#endregion
    
    for (let i=0; i<5; i++){
        Coords[CompletePos[1][i]][CompletePos[0][i]].textContent = word[i];
        AllTds[i] = Coords[CompletePos[1][i]][CompletePos[0][i]];
    } 

    if (score < 0) score = 0;
}


WordToFind.addEventListener('click', function(){
    WordToFind.textContent = word;
    SearchedWord = '';
    if(timeLeft>60) WordToFind.textContent = `Puntuación: ${score}`
});

}