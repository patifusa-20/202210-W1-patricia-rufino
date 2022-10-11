/* PASAPALABRA */

const questions = [
    {
      letter: "a",
      answer: "abducir",
      status: 0,
      question: [
        "Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
        "Alejar un miembro o una región del cuerpo del plano medio que divide imaginariamente el organismo en dos partes simétricas.",
        "Dicho de una persona o de una creación humana: Suscitar en alguien una poderosa atracción."
      ],
    },
    {
      letter: "b",
      answer: "bingo",
      status: 0,
      question: [
        "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
        "Indica que se ha solucionado o acertado algo.",
        "Juego en el que los participantes disponen de cartones con números, que van marcando según coinciden con los que salen de un bombo u otro recipiente semejante."
      ],
    },
    {
      letter: "c",
      answer: "churumbel",
      status: 0,
      question: [ 
        "Niño, crío, bebé",
        "Muchacho",
        "Pivito"
      ],
    },
    {
      letter: "d",
      answer: "diarrea",
      status: 0,
      question: [
        "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
        "Síntoma o fenómeno morboso que consiste en evacuaciones de vientre líquidas y frecuentes.",
        "Heces líquidas y apestosas"
      ],
    },
    {
      letter: "e",
      answer: "ectoplasma",
      status: 0,
      question: [
        "Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
        "Emanación visible del cuerpo del médium.",
        "Región periférica de la célula, la cual carece de orgánulos y es de menor densidad que el endoplasma."
      ],
    },
    {
      letter: "f",
      answer: "facil",
      status: 0,
      question: [ 
        "Que no requiere gran esfuerzo, capacidad o dificultad",
        "Dicho de un suceso: Bastante probable",
        "Que se adapta con flexibilidad a las circunstancias"
      ],
    },
    {
      letter: "g",
      answer: "galaxia",
      status: 0,
      question: [
        "Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
        "La Vía Láctea",
        "Procede de los griegos, los cuales atribuían el origen de la Vía Láctea a las gotas de leche derramadas en el universo por la diosa Hera mientras alimentaba al infante Hércules", 
      ],
    },
    {
      letter: "h",
      answer: "harakiri",
      status: 0,
      question: [ 
        "Suicidio ritual japonés por desentrañamiento",
        "Forma de suicidio ritual, practicado en el Japón por razones de honor o por orden superior, consistente en abrirse el vientre.",
        "Se realizaba de forma voluntaria para morir con honor o como una forma de pena capital para aquellos que habían cometido serias ofensas o habían sido deshonrados"
      ],
    },
    {
      letter: "i",
      answer: "iglesia",
      status: 0,
      question: [ 
        "Templo cristiano",
        "Congregación de los fieles cristianos en virtud del bautismo.",
        "Estado eclesiástico, que comprende a todos los ordenados."
      ],
    },
    {
      letter: "j",
      answer: "jabali",
      status: 0,
      question: [
        "Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
        "Mamífero artiodáctilo, con pelaje muy tupido gris o pardo y grandes colmillos, que habita en bosques y matorrales.",
        "Mamífero artiodáctilo de la familia de los suidos."
      ],
    },
    {
      letter: "l",
      answer: "licantropo",
      status: 0,
      question: [ 
        "Hombre lobo",
        "Persona que, según la tradición popular, se convierte en lobo las noches de plenilunio.",
        "Persona que se transforma en lobo, ya sea a propósito o involuntariamente, a causa de una maldición o de otro agente exterior."
      ],
    },
    {
      letter: "m",
      answer: "misantropo",
      status: 0,
      question: [
        "Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
        "Dicho de una persona: Que siente o manifiesta misantropía.",
        "Aversión, desconfianza, desprecio u odio, en general hacia la especie humana, el comportamiento humano o la naturaleza humana."
      ],
    },
    {
      letter: "n",
      answer: "necedad",
      status: 0,
      question: [ 
        "Demostración de poca inteligencia",
        "Cualidad de necio.",
        "Dicho o hecho necio."
      ],
    },
    {
      letter: "ñ",
      answer: "señal",
      status: 0,
      question: [
        "Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
        "Rasgo o nota que se pone o hay en las cosas para darlas a conocer y distinguirlas de otras.",
        "Signo o medio que se emplea para luego acordarse de algo."
      ],
    },
    {
      letter: "o",
      answer: "orco",
      status: 0,
      question: [
        "Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
        "Según la Roma clásica, lugar, contrapuesto a la tierra, adonde iban a parar los muertos.",
        "Monstruo de la mitología celta"
      ],
    },
    {
      letter: "p",
      answer: "pelo",
      status: 0,
      question: [
        "Filamento cilíndrico, delgado, de naturaleza córnea, que nace y crece en la piel de algunos animales, especialmente los mamíferos.",
        "Cabello de la cabeza humana.",
        "Cosa mínima o de poca importancia o entidad."
      ],
    },
    {
      letter: "q",
      answer: "queso",
      status: 0,
      question: [
        "Producto obtenido por la maduración de la cuajada de la leche",
        "Persona que se halla en medio de un grupo y estorba la comunicación.",
        "Alimento sólido que se obtiene por maduración de la cuajada de la leche animal una vez eliminado el suero"
      ],
    },
    { letter: "r", 
      answer: "raton", 
      status: 0, 
      question: [ 
        "Roedor", 
        "Mamífero roedor de pequeño tamaño, de hocico puntiagudo y cola larga, de pelaje corto.",
        "Pequeño aparato manual conectado a una computadora u otro dispositivo electrónico, cuya función es mover el cursor en la pantalla para dar órdenes."
      ],
    },
    {
      letter: "s",
      answer: "stackoverflow",
      status: 0,
      question: [ 
        "Comunidad salvadora de todo desarrollador informático",
        "Página web que consultan los desarrolladores informáticos",
        "El oráculo de los desarrolladores informáticos"
      ],
    },
    {
      letter: "t",
      answer: "terminator",
      status: 0,
      question: [
        "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
        "Película donde un ciborg asesino es enviado a través del tiempo desde el año 2029 a 1984 para asesinar a Sarah Connor",
        "Película estrenada EL 20/10/84 que fue un gran éxito de taquilla y dió inicio a una franquicia que consta de varias secuelas, una serie de televisión, cómics, novelas y videojuegos."
      ],
    },
    {
      letter: "u",
      answer: "unamuno",
      status: 0,
      question: [
        "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
        "Escritor y filósofo español perteneciente a la generación del 98 que escribió el libro 'Paz en la guerra'",
        "Escritor y filósofo español perteneciente a la generación del 98 que escribió el libro 'Cómo se hace una novela '"
      ],
    },
    {
      letter: "v",
      answer: "vikingos",
      status: 0,
      question: [
        "Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
        "Dicho de una persona: De los pueblos navegantes escandinavos que entre los siglos VIII y XI realizaron incursiones por las islas del Atlántico y por casi toda la Europa occidental.",
        "Guerreros que realizaban incursiones de saqueos, provenientes de los pueblos nórdicos procedentes de Escandinavia, famosos por ser grandes navegantes y por llevar a cabo pillajes y ataques en Europa."
      ],
    },
    {
      letter: "x",
      answer: "botox",
      status: 0,
      question: [ 
        "Toxina bacteriana utilizada en cirujía estética",
        "Neurotoxina elaborada por una bacteria denominada Clostridium botulinum.",
        "Toxina utilizada como producto cosmético para tratamiento estético de las arrugas faciales."
      ],
    },
    {
      letter: "y",
      answer: "yema",
      status: 0,
      question: [
        "Brote embrionario de los vegetales constituido por hojas o por esbozos foliares a modo de botón escamoso del que se desarrollarán ramas, hojas y flores.",
        "Porción central del huevo en los vertebrados ovíparos.",
        "Protuberancia del cuerpo de ciertos animales, como gusanos, que se desarrolla hasta constituir un nuevo individuo."
      ],
    },
    {
      letter: "z",
      answer: "zombi",
      status: 0,
      question: [
        "Persona que se supone muerta y reanimada por arte de brujería con el fin de dominar su voluntad.",
        "Atontado, que se comporta como un autómata.",
        "Muerto resucitado por medios mágicos por un hechicero para convertirlo en su esclavo."
      ],
    },
];

let index = 0;
let letter;
let definition;
let timer = 150;
let counter = questions.length;
const lettersCircle = document.querySelectorAll('.circle');
const getCounter = document.querySelector('.counter');
const getTimer = document.querySelector('.timer');
const answerPlayer = document.querySelector('#answer-user');
let nextRound = false;
let isFinishGame = false;
let wordsNotAnswered;

//Función con el temporizador
const updateTimer = () => {
    getTimer.innerHTML = timer + ' segundos';
    if ( timer === 0 ) {
      doEndGame();
    } else {
      timer--;
      //Invocamos la función cada segundo que pasa para actualizar el valor de la variable timer
      setTimeout('updateTimer()', 1000);
    }
};

//Función cuando finaliza el juego
const doEndGame = () => {
    const answersCorrects2 = questions.filter( element => element.status === 'Correct' );
    const countAnswersCorrects2 = answersCorrects2.length;
    let getCorrectWords = document.querySelector('#corrects-words');
    getCorrectWords.innerText = countAnswersCorrects2; 
    //Resetear opacity del timer
    getTimer.style.removeProperty('opacity');
    //Ocultar .game
    let findGame = document.querySelector('.game');
    findGame.style.display = 'none';
    //Mostrar .end-game
    let findEndGame = document.querySelector('.end-game');
    findEndGame.style.display = 'block';
};

//Función que controla las respuestas
const controlAnswer = (answerUser, wordGame, elementRound) => {    
  //Si el usuario mete valores incorrectos o vacío
  if ( !answerUser || answerUser.length === 0 || !isNaN(answerUser) ) {
    alert('You must write a word. Repeat please.'); 
    return index;
  }

  //Si la respuesta no es la acertada
  if ( answerUser !== wordGame ) {
    elementRound.status = 'Incorrect';       
    lettersCircle.forEach((element,index)=>{
      if (lettersCircle[index].innerText === elementRound.letter.toUpperCase()) {
          element.style.backgroundColor = '#c32424';          
      }
    }); 
    index = index + 1;
    return index;
  };

  elementRound.status = 'Correct';
  lettersCircle.forEach((element,index)=>{
    if (lettersCircle[index].innerText === elementRound.letter.toUpperCase()) {
        element.style.backgroundColor = '#24c33f';          
    }
  }); 
  index = index + 1;

  //Descontamos la palabra del contador
  counter = counter - 1;
  const getCounter = document.querySelector('.counter');
  getCounter.innerText = counter;

  return index;

};


//Escuchamos la tecla enter del teclado
answerPlayer.addEventListener('keypress',(event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('#send-answer').click();
  }
});

//Escuchamos el botón ENVIAR
const saveAnswer = document.querySelector('#send-answer');
saveAnswer.addEventListener('click', () => {
  
  //Recoger respuesta del jugador
  const saveAnswerVal = answerPlayer.value.toLowerCase();
  //Vaciamos el input
  answerPlayer.value = '';  
  //Ponemos el focus en el input de nuevo
  answerPlayer.focus();
  currentIndex = controlAnswer(saveAnswerVal, correctWord, element);
  //Comprobamos si queda alguna letra por adivinar
  const wordsNotAnswered2 = questions.filter( element => element.status === 0 );
  //Si dicho array filtrado tiene un nº de elementos igual a 0 entonces
  if ( wordsNotAnswered2.length === 0) {
    doEndGame();
    return;
  }
  //Si es siguiente ronda, usamos un array filtrado con las respuestas pendientes
  if ( nextRound ) {
    pasaPalabraGame(currentIndex, wordsNotAnswered);
    return index;
  }
  pasaPalabraGame(currentIndex, questions);
  return index;

});

//Escuchamos el botón PASAPALABRA
const doKeyWord = document.querySelector('#key-word');
doKeyWord.addEventListener('click', () => {
  //Buscamos en el DOM el input
  const answerPlayer = document.querySelector('#answer-user');
  //Lo vaciamos
  answerPlayer.value = '';    
  //Ponemos el focus en el input de nuevo
  answerPlayer.focus();
  //Sumamos al valor de index 1
  index = index + 1; 
  if ( nextRound ) {
    pasaPalabraGame(index, wordsNotAnswered);
    return index;
  }  
  //Inicializamos de nuevo el loop que recorre las palabras pero con el nuevo valor de índice.
  pasaPalabraGame(index, questions);
  //Regresamos el nuevo valor de índice para actualizar la variable global
  return index;
});


//Función que muestra la letra y la definición
const showDefinition = (valLetter,valDefinition) => {
  //Mostrar la definición
  const showDefinition = document.querySelector('.definition');
  showDefinition.innerText = valDefinition;
  //Mostrar la letra
  const showLetter = document.querySelector('.letter');
  showLetter.innerText = valLetter.toUpperCase();
};


//En cada round debe hacer lo siguiente ->
const pasaPalabraGame = (currentIndex, wordsGame) => {

  console.table(wordsGame);  

  //Comienza el loop a recorrer la rueda de palabras
  for ( let i = currentIndex;  i < wordsGame.length; i++ ) {
    //En cada loop obtenemos el objeto
    element = wordsGame[i];
    //La letra
    letter = element.letter;
    //La palabra que hay que adivinar
    correctWord = element.answer;
    //Y la definición
    const getDefinition = (element) => {
      let randomNum = Math.floor(Math.random() * 3);      
      return element.question[randomNum];
    };
    definition = getDefinition(element);

    //Inicializamos la función que muestra la letra y definición en pantalla al usuario
    showDefinition(letter,definition);  
    //Actualizamos el valor de la variable global index
    index = currentIndex;
    //Cambiamos el valor de la siguiente ronda a true  
    return index;
  }

  //Si el índice es igual o superior a la longitud del array entonces significa que ya completó la primera ronda
  if ( currentIndex >= wordsGame.length ) {
    //Actualiza el array con todas las palabras que tengan status 0 (que no son aún ni correctas ni incorrectas)
    wordsNotAnswered = wordsGame.filter( element => element.status === 0 );
    //Si dicho array filtrado tiene un nº de elementos mayor que 0 entonces
    if ( wordsNotAnswered.length > 0) {
      //Repetimos el juego pero solo con las letras q tienen ese status 0
      //Actualizamos el index a 0 ya que queremos que recorra los resultados del array empezando por el primero
      currentIndex = 0;
      //Actualizamos el valor de la variable global index
      index = currentIndex;
      //Cambiamos el valor de la siguiente ronda a true
      nextRound = true;
      //Inicializamos de nuevo el loop pero con el nuevo valor de índice y el nuevo valor del array
      pasaPalabraGame(currentIndex, wordsNotAnswered);
      //Devolvemos el valor del índice en la variable global
      return wordsNotAnswered;
    }
  }    

  return index;
};


//Escuchamos cuando se pulsa el botón de JUGAR
const getStartBtn = () => {
  const startBtn = document.querySelector('#start');
  startBtn.addEventListener('click', () => {
    //Ocultar .instructions
    let findInstructions = document.querySelector('.instructions');
    findInstructions.style.display = 'none';
    //Mostrar .game
    let findGame = document.querySelector('.game');
    findGame.style.display = 'block';
    //Iniciamos el decontador
    getCounter.style.opacity = '1';
    getCounter.innerText = counter;      
    //Ponemos el focus en el input
    answerPlayer.focus();
    //Iniciamos el temporizador
    getTimer.style.opacity = '1';
    updateTimer();
    //Inicializamos el juego
    pasaPalabraGame(index,questions);
  });
};

//Escuchamos cuando se pulsa el botón de CERRAR/FINALIZAR juego
const getCloseBtn = () => {
  const closeBtn = document.querySelector('#close');
  closeBtn.addEventListener('click', () => {
    doEndGame();
  });
};

//Escuchamos cuando se pulsa el botón JUGAR OTRA VEZ
const getPlayAgainBtn = () => {
  const playAgainBtn = document.querySelector('#play-again');
  playAgainBtn.addEventListener('click', () => {
    //Resetear valores de variables
    index = 0;
    counter = questions.length;
    timer = 150;
    //Resetear el status de los objetos contenidos como elementos en el array a 0
    for ( let i = 0;  i < questions.length; i++ ) {
      questions[i].status = 0;
    }
    //Resetear color de los círculos
    lettersCircle.forEach((element)=>{
        element.style.removeProperty('background-color');   
    }); 
    //Resetear opacity del counter
    getCounter.style.removeProperty('opacity');
    //Ocultar .end-game
    let findEndGame = document.querySelector('.end-game');
    findEndGame.style.display = 'none';
    //Mostrar .instructions
    let findInstructions = document.querySelector('.instructions');
    findInstructions.style.display = 'block';
    console.table(questions); 
  });
};

const addEventListeners = () => {
  //Ejecutamos una función que escucha cuando se pulsa el botón de JUGAR
  getStartBtn();
  //Ejecutamos una función que escucha cuando se pulsa el botón de CERRAR/FINALIZAR juego
  getCloseBtn();
  //Ejecutamos una función que escucha cuando se pulsa el botón de JUGAR OTRA VEZ
  getPlayAgainBtn();
};

addEventListeners();
