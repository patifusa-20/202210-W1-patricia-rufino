const flights = [
    { id: 00, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 01, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 02, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 03, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 04, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 05, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 06, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 07, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 08, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 09, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false },
];

//****** FUNCIÓN PARA EL TIPO DE USUARIO: ADMIN *****//
let createMoreFlight;

const createNewFlight = () => {
    const totalFlights = flights.length;
    if (totalFlights === 15) {
        alert('You have many flights.');
    } else {
        let indexNewFlight = flights.length;
        //Crear un nuevo objeto basado en uno ya existente dentro del array
        const newFlight = Object.create(flights[0]);

        //Pregunto al usuario los datos del nuevo vuelo y voy almacenándolo en variables:
        //Pregunto el valor de To y hago comprobaciones para verificar si a dado un valor válido o no
        let to;
        const toValue = () => {
            to = prompt('What is the destination of this flight?');
            if (to.length === 0 || isNaN(to) === false || to === null) {
                alert('Please, write a valid value for "To"');
                toValue();
            } else {
                return to;
            }
        };
        //Pregunto el valor de From y hago comprobaciones para verificar si a dado un valor válido o no
        let from;
        const fromValue = () => {
            from = prompt('What is the origin of this flight?');
            if (from.length === 0 || isNaN(from) === false || from === null) {
                alert('Please, write a valid value for "From"');
                fromValue();
            } else {
                return from;
            }
        };
        //Pregunto el 'cost' y compruebo que lo que se devuelva algún valor y que este valor sea un número
        let cost;
        const costValue = () => {
            cost = prompt('What is the cost of this flight?');
            debugger;
            if (cost.length === 0 || isNaN(cost) || cost === null) {
                alert('Please, write a valid value for "Cost"');
                costValue();
            } else {
                return cost;
            }
        };
        //Inicializo las funciones para empezar a recoger los datos
        toValue();
        fromValue();
        costValue();
        //En 'scale' necesito un booleano así que utilizo el método 'confirm' que me devuelve booleano.
        const scale = confirm(
            'Does this flight have a stopover?. Click in "Accept" to Yes or in "Cancel" to Not'
        );

        //Le añado los datos que me va dando el usuario con el prompt
        newFlight.id = indexNewFlight;
        newFlight.to = to;
        newFlight.from = from;
        newFlight.cost = cost;
        newFlight.scale = scale;
        //Añado el nuevo objeto al array
        flights.push(newFlight);

        //Recogemos si el usuario quiere seguir creando vuelos
        createMoreFlight = confirm('Do you want to create more flight?');
        if (createMoreFlight === true) {
            //Si quiere seguir añadiendo vuelos, volvemos a inicializar la función
            createNewFlight();
        } else {
            return console.log(flights);
        }
    }
};

//****** FUNCIÓN PARA EL TIPO DE USUARIO: ADMIN *****//
const removeFlight = (id) => {
    //Eliminar un elemento del array
    flights.splice(id, 1);
    return console.log(flights);
};

//****** FUNCIÓN PARA EL TIPO DE USUARIO: ADMIN *****//
//Creamos una función que pregunta al usuario que quiere hacer si es ADMIN
let taskSelected;
const taskSelectedAdmin = () => {
    taskSelected = prompt(
        'Hi Admin, what do you want to do?. Write 1 if you want to create a new flight or 2 if you want to delete a flight.'
    );
    //El usuario quiere crear un nuevo vuelo
    if (taskSelected === '1') {
        createNewFlight();
        //El usuario quiere borrar un vuelo
    } else if (taskSelected === '2') {
        //Le preguntamos que vuelo quiere borrar
        let idToRemove = Number(
            prompt('What flight ID do you want to remove? ')
        );
        //Inicializamos la función que elimina el vuelo, pasando como argumento el valor que puso el usuario
        removeFlight(idToRemove);
    } else {
        while (taskSelected !== '1' || taskSelected !== '2') {
            alert(
                'Please ADMIN, write "1" to Create or "2" to Delete a flight.'
            );
            taskSelectedAdmin();
        }
    }
    return taskSelected;
};

//****** FUNCIÓN PARA EL TIPO DE USUARIO: USER *****//
//Creamos una función que genera un nuevo array de objetos con los que cumplan la condición
const flightsListFiltered = (price) => {
    //Creamos el nuevo array
    const newFlightList = [];
    //Recorremos el array existente y miramos el valor de la propiedad cost de cada objeto.
    for (let i = 0; i < flights.length; i++) {
        let priceFlight = flights[i].cost;
        //Creamos una condición que compare el precio de cada vuelo con el precio máximo que está dispuesto a pagar el usuario
        if (priceFlight <= price) {
            //Si el valor de cost cumple la condición, añadimos el objeto al nuevo array
            newFlightList.push(flights[i]);
        }
    }
    //Mostramos el nuevo listado con los vuelos que cumplen.
    console.log(newFlightList);
    //Creamos una condición que comprueba si el nuevo array generado tiene algún objeto, si no es así, significa que no hay ningún resultado disponible para el usuario
    if (newFlightList.length === 0) {
        console.log('No results found');
    }
    return newFlightList;
};

//****** FUNCIÓN PARA EL TIPO DE USUARIO: USER *****//
//Creamos una función que pregunta al usuario cuanto quiere pagar
const priceMaxUserTask = () => {
    //Preguntamos al usuario cual es el precio máximo que está dispuesto a pagar y lo guardamos en una variable
    const priceMax = prompt('What is the maximum price you want to pay?');
    //Si el usuario no nos da el valor que necesitamos, se lo indicamos y volvemos a preguntarle
    if (priceMax.length === 0 || isNaN(priceMax) || priceMax === null) {
        alert('Please USER, write a valid value');
        priceMaxUserTask();
    } else {
        //Inicializamos la función, pasándole como argumento, el valor que puso el usuario.
        flightsListFiltered(priceMax);
    }
};

//****** FUNCIÓN PRINCIPAL QUE EJECUTA TODAS LAS DEMÁS *****//
const tasksUser = (type) => {
    //Para usuarios ADMIN
    if (type === 'A') {
        //Inicializamos la función que pregunta al usuario ADMIN qué quiere hacer
        taskSelectedAdmin();
        //Para usuarios USER
    } else if (type === 'U') {
        //Inicializamos la función que pregunta al usuario USER cuanto está dispuesto a pagar
        priceMaxUserTask();
    } else {
        while (type !== 'A' || type !== 'U') {
            console.log('Please, write A to user ADMIN or U to user USER.');
            typeOfUserFunction();
        }
    }
    return flights;
};

let typeOfUser;
const typeOfUserFunction = () => {
    typeOfUser = prompt(
        'What type of user are you?. Write A if your are ADMIN or U if you are USER.'
    ).toUpperCase();
    tasksUser(typeOfUser);
    return typeOfUser;
};

typeOfUserFunction();
