/**************BINGO*****************/

//Definimos todas las variables globales
let arrayNumbers = []; //Array que guarda los nºs que ya han salido del bombo
const scoringBoard = []; //Creamos un array de objetos que será el tablero con el ranking de puntuaciones
let counterTurns = 0; //Contador de turnos
let numberGame; //El nº aleatorio que se genera
let numberRepeated = false; //Los nºs aleatorios por defecto, no están repetidos
let arrayLines = []; //Array que guarda las filas donde hay línea
let sameUser = false; //Inicialmente, el usuario que juegue no será el mismo

//Función para generar un nº aleatorio
const numberRandom = () => {
    numberGame = Math.floor(Math.random() * 20);
    return numberGame;
};

//Función que comprueba si el nº es 0 o está repetido
const detectNumberRepeated = (numberGame) => {
    numberRepeated = arrayNumbers.includes(numberGame);
    //Si sale 0 o el nº está repetido, vuelve a generar el nº
    while (numberGame === 0 || numberRepeated) {
        numberGame = numberRandom();
        detectNumberRepeated(numberGame);
        return numberRepeated;
    }
    return numberRepeated;
};

//Función que controla el nº aleatorio que se añade al cartón del jugador
const numberGenerated = () => {
    numberRandom();
    //Inicializamos la función que comprueba si el nº es 0 o está repetido
    detectNumberRepeated(numberGame);

    //Añadimos al array los nºs que van saliendo
    arrayNumbers.push(numberGame);
    return numberGame;
};

//Generamos un array de objetos que contiene los nºs del cartón y el estado en que se encuentra cada nº
//Creamos los datos del cartón
const createCard = () => {
    //Resetamos array que guarda los nºs generados aleatoriamente cada vez que generamos un cartón
    arrayNumbers = [];
    const card = [];
    //Generamos los elementos del array
    for (let i = 0; i < 16; i++) {
        //Para cada elemento del array creamos un objeto
        let element = {};
        //Generamos nºs aleatorios
        let randomNumber = numberGenerated();
        //Asignamos nº aleatorio a la propiedad del objeto number
        element.number = randomNumber;
        //Asignamos false por defecto a la propiedad del objeto matched
        element.matched = false;
        //Definimos la fila a la que pertenece cada elemento del array
        if (i <= 4) {
            element.row = 1;
        } else if (i > 4 && i < 10) {
            element.row = 2;
        } else {
            element.row = 3;
        }
        //Añadimos el objeto creado al array
        card.splice(i, 1, element);
    }
    console.table(card);
    return card;
};

//Creamos el listado de nºs que contiene el cartón para mostrarlo al usuario
const numbersCard = (currentCard) => {
    const numbersCardGamer = [];
    let numbersCard;
    currentCard.forEach(function (element, index) {
        numbersCard = element.number;
        numbersCardGamer.push(numbersCard);
        return numbersCardGamer;
    });
    return numbersCardGamer;
};

//Función para actualizar en card el nº coincidente por una X y el estado a true.
const updateCard = (num, currentCard) => {
    let counter = 0;
    //Recorremos cada elemento del array(cartón)
    currentCard.forEach(function (element, index) {
        //Si el elemento coincide con el nº random
        if (element.number === num) {
            alert(`Perfect!, the number ${num} is on your card`);
            //Entonces sustituimos ese nº por una X
            element.number = 'X';
        } else {
            counter++;
            if (counter === currentCard.length) {
                alert(`I'm sorry, the number ${num} is not on your card`);
            }
        }
    });
    //Devolvemos el cartón actualizado
    return currentCard;
};

//Función que inicializa el bombo, pregunta al jugador si coincide con algún nº de su cartón y incializa la función que actualiza le cartón
const compareNumbers = (currentCard, currentArray) => {
    //Inicializamos la función que genera un número random (el bombo)
    const currentNumber = numberGenerated();
    //Preguntamos mediante confirm() al jugador si el número (random) coincide con alguno de los de su cartón
    const numberOnCard = confirm(
        `Ball number ${currentNumber} \nDo you want to know if this number is on your card?.`
    );
    //Si el jugador acepta en el confirm (el sistema comprueba si existe el nº en su cartón)
    if (numberOnCard) {
        //Sustituimos ese número en su cartón por una X
        updateCard(currentNumber, currentArray);
    }
    return numberOnCard;
};

//Función para comprobar si el jugador tiene el cartón completo de Xs
const cardCompleted = (cardOld) => {
    let counter = 0;
    let cardOldValue = false;
    //Recorremos cada elemento del array(cartón)
    cardOld.forEach(function (element) {
        //Se comprueba si el cartón está completo de Xs
        if (element.number === 'X') {
            //Y cambiamos el valor de la propiedad matched de ese elemento
            element.matched = true;
            //Contamos en general los elementos del array con X
            counter++;
            //Comprobamos si el total contado es igual al nº de elmentos del array, entonces el cartón está completo.
            if (counter === cardOld.length) {
                cardOldValue = true;
                return cardOldValue;
            }
        }
    });
    console.table(cardOld);
    return cardOldValue;
};

//Función que avisa al jugador cuando ha hecho línea
const sayLine = (isline, row) => {
    if (isline && !arrayLines.includes(row)) {
        alert(`You have a LINE in the row ${row}!`);
        arrayLines.push(row);
    }
};

//Función para comprobar si el jugador ha completado la fila con Xs
const findLine = (cardOld) => {
    let counterRow1 = 0;
    let counterRow2 = 0;
    let counterRow3 = 0;
    let lineInRow = false;
    let thisRow;
    //Recorremos cada elemento del array(cartón)
    cardOld.forEach(function (element) {
        if (element.row === 1 && element.number === 'X') {
            counterRow1++;

            //Si el contador coincide con la longitud del array
            if (counterRow1 === 5) {
                //Significará que ya todos los elementos tienen una X en esta fila
                lineInRow = true;
                thisRow = element.row;
                //Inicializamos la función que canta Línea
                sayLine(lineInRow, thisRow);
            }
            return counterRow1;
        } else if (element.row === 2 && element.number === 'X') {
            counterRow2++;

            //Si el contador coincide con la longitud del array
            if (counterRow2 === 5) {
                //Significará que ya todos los elementos tienen una X en esta fila
                lineInRow = true;
                thisRow = element.row;
                //Inicializamos la función que canta Línea
                sayLine(lineInRow, thisRow);
            }
            return counterRow2;
        } else if (element.row === 3 && element.number === 'X') {
            counterRow3++;

            //Si el contador coincide con la longitud del array
            if (counterRow3 === 5) {
                //Significará que ya todos los elementos tienen una X en esta fila
                lineInRow = true;
                thisRow = element.row;
                //Inicializamos la función que canta Línea
                sayLine(lineInRow, thisRow);
            }
            return counterRow3;
        }
    });
};

//Función que pregunta al jugador si quiere volver a jugar
const playAgain = (name, score) => {
    //Actualizo
    const userWantToPlay = confirm(`Do you want to play again?`);
    if (userWantToPlay) {
        arrayNumbers = []; //Creamos un array de objetos que será el tablero con el ranking de puntuaciones
        counterTurns = 0; //Contador de turnos
        arrayLines = []; //Reseteamos array que guarda las filas con línea

        //Inicializamos la función que crea un cartón para el jugador
        let arrayCard = createCard();
        //Inicializamos la función que genera el cartón de números para el jugador
        let cardGamer = numbersCard(arrayCard);

        const userAnswer = askToUser(cardGamer);
        taskFromAnswer(
            name,
            userAnswer,
            cardGamer,
            arrayCard,
            score,
            userWantToPlay
        );
        return arrayCard;
    } else {
        alert('Ok, bye bye');
        const newPlayer = confirm('Some new player want to play?');
        if (newPlayer) {
            arrayNumbers = []; //Creamos un array de objetos que será el tablero con el ranking de puntuaciones
            counterTurns = 0; //Contador de turnos
            score = 50; //Reseteo la puntuación
            arrayLines = []; //Reseteamos array que guarda las filas con línea
            welcomeBingo();
        }
        return newPlayer;
    }
};

//Función que da una puntuación al jugador en función del nº de turnos que tardó en completar el cartón, a más turnos, menos puntos... a menos turnos, más puntos.
const scoring = (counter) => {
    //El usuario parte de 50 puntos
    let initialScore = 50;
    //Por cada turno, se resta 1 punto
    let scorePlayer = initialScore - counter;
    return scorePlayer;
};

//Función que crea los items del array con los datos de cada jugador
const createScoringBoard = (name, score) => {
    const itemBoard = () => {
        const dataPlayer = {};
        dataPlayer.player = name;
        dataPlayer.score = score;
        return dataPlayer;
    };
    const createItem = itemBoard();
    //Añadimos al tablero de puntuación el jugador y su puntuación
    scoringBoard.push(createItem);
    return scoringBoard;
};

//Función principal del juego
const bingo = (name, currentCard, currentArray, score, sameUser) => {
    //Inicializamos la función que genera y compara los números
    compareNumbers(currentCard, currentArray);
    const showCard = numbersCard(currentArray);
    //Comprobamos si hay LÍNEA const lineInCard =
    findLine(currentArray);
    //Comprobamos si el cartón está completo
    const stateCard = cardCompleted(currentArray);
    //Contamos los turnos
    counterTurns++;
    //Si no hay LÍNEA, sigue preguntando al jugador si quiere seguir jugando
    if (!stateCard) {
        //Mostramos el cartón actualizado
        alert(`Your card: ${showCard}`);
        //Mientras el jugador quiera seguir jugando
        if (confirm('Do you want to keep playing?')) {
            //Inicializa de nuevo la función principal
            bingo(name, showCard, currentArray, score, sameUser);
            //Y regresa el cartón actualizado
            return showCard;
        } else {
            return alert('Ok, bye bye');
        }
    } else {
        //Inicializamos la función que calcula los puntos del jugador
        score = scoring(counterTurns);
        //Le decimos al usuario en cuantos turnos ha ganado y finalizamos el juego
        alert(
            `Congratulation ${name}! Your card is complete!\nYou won ${score} points in ${counterTurns} rounds`
        );

        //Si es el mismo jugador, súmale los puntos
        if (!sameUser) {
            scoringBoardUpdated = createScoringBoard(name, score);
            //Ordenamos el listado por nº de puntos
            scoringBoardUpdated.sort((a, b) => a.score - b.score);
            //Invertimos el orden para sea descendente
            scoringBoardUpdated.reverse();
            console.log('This is the updated ranking: ');
            console.table(scoringBoardUpdated);
        } else {
            //Acualizamos la puntuación total del jugador que repite
            const findPlayer = scoringBoard.find(
                (element) => element.player === name
            );
            //Guardamos la puntuación antigua
            const oldScore = findPlayer.score;
            //Calculamos el total de la antigua + la nueva
            let totalScore = oldScore + score;
            //Actualizamos el valor de la propiedad
            findPlayer.score = totalScore;
            //Ordenamos el listado por nº de puntos
            scoringBoard.sort((a, b) => a.score - b.score);
            //Invertimos el orden para sea descendente
            scoringBoard.reverse();
            console.log('This is the updated ranking: ');
            console.table(scoringBoard);
        }
        playAgain(name, score);
    }

    //Regresa el cartón actualizado
    return currentCard;
};

//Función que pregunta el nombre al usuario
const valueTypedFunction = () => {
    const userTypedText = prompt('Welcome to Bingo Game, what is your name?');
    return userTypedText;
};

//Función que analiza si el valor introducido por el usuario es correcto
const namePlayer = () => {
    //Pedimos y guardamos el nombre del jugador
    let valueTyped = valueTypedFunction();

    while (
        valueTyped === null ||
        valueTyped === undefined ||
        isNaN(valueTyped) === false ||
        valueTyped.length === 0
    ) {
        alert('Write a correct name please');
        valueTyped = valueTypedFunction();
    }

    return valueTyped;
};

//Preguntamos al usuario si le gusta ese cartón y guardamos su respuesta
const askToUser = (card) => {
    const selectCardUser = prompt(
        `Your new card is this: ${card} \nDo you like it? YES/NOT`
    );
    return selectCardUser;
};

//Definimos lo que ocurre según la respuesta que dió el usuario
const taskFromAnswer = (name, answer, card, arrayCard, score, sameUser) => {
    let answerFormatted = answer.toUpperCase();
    if (answerFormatted === 'NOT') {
        //Inicializamos la función que crea un cartón para el jugador
        arrayCard = createCard();

        //Inicializamos la función que genera el cartón de números para el jugador
        card = numbersCard(arrayCard);

        answer = askToUser(card);

        return taskFromAnswer(name, answer, card, arrayCard, score, sameUser);
    } else if (answerFormatted !== 'YES') {
        alert(
            'Please, write YES if you want this card or NOT if you want to change it.'
        );
        answer = askToUser(card);
        return taskFromAnswer(name, answer, card, arrayCard, score, sameUser);
    } else {
        alert("Are you ready?... Let's start Bingo Game!");
        //Reseteamos el array que guarda los nºs ya dichos
        arrayNumbers = [];
        //Inicializamos la función principal
        return bingo(name, card, arrayCard, score, sameUser);
    }
};

//Función que inicializa el juego
const welcomeBingo = () => {
    const nameGamer = namePlayer();
    console.log('This is the updated ranking: ');
    console.table(scoringBoard);

    //Inicializamos la función que crea un cartón para el jugador
    let arrayCard = createCard();
    //Inicializamos la función que genera el cartón de números para el jugador
    let cardGamer = numbersCard(arrayCard);

    const userAnswer = askToUser(cardGamer);

    return taskFromAnswer(
        nameGamer,
        userAnswer,
        cardGamer,
        arrayCard,
        (score = 50),
        sameUser
    );
};

//Inicialmente, crearemos algunos jugadores ficticios para rellenar el ranking
createScoringBoard('Carlos', 250);
createScoringBoard('Marta', 34);
//Inicializamos el juego
welcomeBingo();
