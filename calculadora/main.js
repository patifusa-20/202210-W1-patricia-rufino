//CALCULADORA en HTML/CSS/JS

let valorA;
let valorB;
let operator;
let sum;
let rest;
let mult;
let div;
let resultOperation;
let valueInitial = '0';
const once = { once: true };
const operationCal = {
  valorA,
  valorB,
  operator,
};
let isAfterOperator = false;
let isAfterReset = false;


//Función que realiza la operación
const doOperation = (vA,vB,vOpera) => {
  if ( vOpera === 'sum') {
    //Convierto los valores en Number ya que el prompt me devuelve un string.
    sum = Number.parseFloat(vA) + Number.parseFloat(vB);
    return sum;
  } else if ( vOpera === 'rest') {
    rest = vA - vB;
    return rest;
  } else if ( vOpera === 'mult') {
    mult = vA * vB;
    return mult;
  } else if ( vOpera === 'div') {
    div = vA / vB;
    return div;
  }
};

//Función que formatea el resultado
const formatResult = (valResult) => {
  if ( !Number.isInteger(valResult) ) {
    valResult = valResult.toFixed(4);
    valResult = valResult.toString();    
    if ( valResult.includes('.')) {      
      valResult = valResult.replace('.',',');
    }
    
  }
  return valResult;
};

//Función que calcula y formatea el resultado
const getResultCalculator = (a,b,opera) => { 
  //Si el valor incluye coma la cambio por un punto
  if ( a.includes(',')) {
    a = a.replace(',','.');
  }
  if ( b.includes(',')) {
    b = b.replace(',','.');
  }
  //Inicializar función que calcula el resultado
  const totalResult = doOperation(a,b,opera);
  //Inicializar función que formatea el resultado
  const finalResult = formatResult(totalResult);

  return finalResult;
}

//Función que resetea el valor inicial
const resetCalc = () => {
  document.querySelector('.screen-values').innerText = valueInitial;
  document.querySelector('.screen-operation').innerText = valueInitial; 
  isAfterReset = true;
  return isAfterReset;
};

//Escuchamos cuando se pulsa la tecla AC
const getResetKey = () => {
  const resetKey = document.querySelector('#reset');
  resetKey.addEventListener('click', resetCalc);
};

//Función que escucha cuando se pulsa la tecla +/-
const getPosNegKey = () => {
  const posNegKey = document.querySelector('#posNeg');
  posNegKey.addEventListener('click', () => {
    const addNegativeSymbol = '<span class="negativeNum">-</span>';
    let currentVal = document.querySelector('.negativeNum');
    if ( !currentVal ) {
      document.querySelector('.screen-values').innerHTML = addNegativeSymbol + document.querySelector('.screen-values').innerText;
    } else {
      document.querySelector('.negativeNum').outerText = '';
    }
  });  
};

//Función que escucha cuando se pulsa la tecla %
const getPercentKey = () => {
  const percentKey = document.querySelector('#percent');
  percentKey.addEventListener('click',() => {
    document.querySelector('.screen-values').innerText = document.querySelector('.screen-values').innerText / 100;
  });
};

//Función que escucha cuando se pulsan las teclas numéricas
const getNumClicked = () => {
  const numericKeys = document.querySelectorAll('.num');
  numericKeys.forEach((button) => {
    button.addEventListener('click', (event) => {    
      if ( isAfterReset ) {
        document.querySelector('.screen-values').innerText = '';
        isAfterReset = false;
      }   
      if ( isAfterOperator ) {
        document.querySelector('.screen-values').innerText = '';
        isAfterOperator = false;
      }
      //Al clicar la tecla, añade su contenido al elemento con clase .screen-values, que lo pinta en la pantalla de la calculadora             
      document.querySelector('.screen-values').innerText = document.querySelector('.screen-values').innerText + event.target.innerText;          
    });
  });
}

//Función que escucha cuando se pulsan las teclas operadores y ejecutamos una función al clicarlas
const getOperatorClicked = () => {
  const operatorsKeys = document.querySelectorAll('.operator');
  operatorsKeys.forEach((button) => {
    button.addEventListener('click', (event) => { 
      operator = event.target.id;
      operatorSymbol = event.target.innerText;
      valorA = document.querySelector('.screen-values').innerText;   
      document.querySelector('.screen-operation').innerText = valorA + operatorSymbol;    
      operationCal.valorA = valorA;
      operationCal.operator = operator;
      isAfterOperator = true;
      return isAfterOperator;
    });
  });
}

//Función que escucha cuando se pulsa la tecla coma
const getCommaKey = () => {
  const commaKey = document.querySelector('#comma');
  commaKey.addEventListener('click', (element) => {
    const currentString = document.querySelector('.screen-values').innerText;
    if ( !currentString.includes(',') ) {
      document.querySelector('.screen-values').innerText = document.querySelector('.screen-values').innerText + element.target.innerText;
    }
  });
};

//Escuchamos cuando se pulsa la tecla =
const getEqualKey = () => {
  const equalKey = document.querySelector('#equal');
  //Cuando hacemos click en el símbolo de =, sucede lo siguiente:
  equalKey.addEventListener('click', (event) => {
    //Guardamos en la variable el contenido del elemento con clase .screen-values que además, pintamos.
    valorB = document.querySelector('.screen-values').innerText;  
    equalSymbol = event.target.innerText;
    document.querySelector('.screen-operation').innerText = valorA + operatorSymbol + valorB + equalSymbol;     
    //Añadimos al objeto con la operación, el valor a la propiedad valorB
    operationCal.valorB = valorB;   
    //Guardamos en variables los valores de las propiedades que contiene el objeto con la operación
    let firstVal = operationCal.valorA;
    let secondVal = operationCal.valorB;
    let operatorVal = operationCal.operator;
    //Guardamos en una variable lo que nos devuelve la función que realiza la operación y a esta le pasamos las variables como parámetros
    let resultCalc = getResultCalculator(firstVal,secondVal,operatorVal);
    //Pintamos el resultado que nos devuelve la función
    document.querySelector('.screen-values').innerText = resultCalc;
    console.log(operationCal);
  });
};

//Función principal
const addEventListeners = () => {
  //Ejecutamos una función que escucha cuando se pulsa la tecla AC
  getResetKey();
  //Ejecutamos una función que escucha cuando se pulsa la tecla +/-
  getPosNegKey();
  //Ejecutamos una función que escucha cuando se pulsa la tecla %
  getPercentKey();
  ////Ejecutamos una función que escucha cuando se pulsan las teclas numéricas
  getNumClicked();
  //Ejecutamos una función que escucha cuando se pulsan las teclas operadores  
  getOperatorClicked();
  //Escuchamos cuando se pulsa la tecla con el símbolo de la 'coma' y ejecutamos una función al clicarlo
  getCommaKey();
  //Escuchamos cuando se pulsa la tecla = y ejecutamos una función al clicarlo
  getEqualKey();

};

//Reseteamos los valores
resetCalc(valueInitial);
//Inicializamos la función principal
addEventListeners();